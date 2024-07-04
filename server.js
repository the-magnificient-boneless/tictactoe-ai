import express from "express";
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

app.use('/save-to-csv', limiter);

app.post('/save-to-csv', [
  body('data').notEmpty().withMessage('CSV data is required'),
], (req, res) => {
  const idempotencyKey = req.headers['idempotency-key'] || req.body.idempotencyKey;
  

  // Check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const csvData = req.body.data+"\n"; // Access the data from the request body
  const sanitizedFilename = sanitize(req.body.filename);

  // Construct the file path (adjust to your needs)
  const filePath = path.join(__dirname, 'public', sanitizedFilename);

  // Sanitize and write to the file (overwrites existing content)
  fs.appendFile(filePath, csvData, (err) => {
    if (err) {
      console.error('Error saving data:', err);
      res.status(500).send('Error saving data to file');
    } else {
      if (submittedKeys.has(idempotencyKey)) {
        return res.status(200).send('Data already submitted'); 
      }
      res.status(200).send('Data saved successfully');
      submittedKeys.add(idempotencyKey); // Mark as submitted

    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

//Refactor the funtion above to store in mongo based on the code below

import { MongoClient, ServerApiVersion } from "mongodb";
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

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);