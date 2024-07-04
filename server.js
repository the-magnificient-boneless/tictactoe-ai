import express from "express";
import { MongoClient, ServerApiVersion } from "mongodb";
import fs from "fs";
import path from 'path';
import { fileURLToPath } from 'url';
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import sanitize from "sanitize-filename";
import { body, validationResult } from "express-validator";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3001;

const uri = "mongodb+srv://admintictactoe:U9Tc3K5xIsdD5J3k@cluster0.jhu9vtx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
    directConnection: true,
  },
});

// Middleware for Security
app.use(helmet()); // Set security headers
app.use(cors());
app.use(express.json()); // for parsing application/json

// Rate limiting to prevent abuse
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 10000, // Limit each IP to 100 requests per windowMs
});
const submittedKeys = new Set(); // In-memory storage for simplicity (use a database in production)

app.use('/save-to-db', limiter);

app.post('/save-to-db', [
  body('data').notEmpty().withMessage('CSV data is required'),
], async (req, res) => {
  const idempotencyKey = req.headers['idempotency-key'] || req.body.idempotencyKey;

  // Check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const csvData = req.body.data;
  const sanitizedFilename = sanitize(req.body.filename);

  try {
    if (submittedKeys.has(idempotencyKey)) {
      return res.status(200).send('Data already submitted');
    }

    // Connect to MongoDB and get the collection
    await client.connect();
    const collection = client.db("tictactoe").collection("csvData");

    // Insert the data into the collection
    const result = await collection.insertOne({
      filename: sanitizedFilename,
      data: csvData,
      createdAt: new Date(),
    });

    res.status(200).send('Data saved successfully');
    submittedKeys.add(idempotencyKey); // Mark as submitted
  } catch (err) {
    console.error('Error saving data:', err);
    res.status(500).send('Error saving data to database');
  } finally {
    await client.close(); // Ensure the client is closed after the operation
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
