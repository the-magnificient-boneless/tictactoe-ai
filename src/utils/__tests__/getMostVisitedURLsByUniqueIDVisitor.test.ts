import getMostVisitedURLsByUniqueIDVisitor from '../getMostVisitedURLsByUniqueIDVisitor';

describe('getMostVisitedURLsByUniqueIDVisitor', () => {
    it('should return an array with descending order based on Unique IDs visitors', () => {
        const logs = [
            { url: "/home", userId: "A" },
            { url: "/about", userId: "B" },
            { url: "/products", userId: "A" },
            { url: "/home", userId: "C" },
            { url: "/contact", userId: "B" },
            { url: "/products", userId: "D" },
            { url: "/home", userId: "A" },
            { url: "/home", userId: "B" },
            { url: "/products", userId: "A" }];
        const result = getMostVisitedURLsByUniqueIDVisitor(logs);
        // Assert
        expect(result).toEqual(['/home', '/products', '/about', '/contact']);
    });
    it('should return an empty array', () => {
        const logs = [];
        const result = getMostVisitedURLsByUniqueIDVisitor(logs);
        // Assert
        expect(result).toEqual([]);
    });
});
