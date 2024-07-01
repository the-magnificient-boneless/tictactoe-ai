import maxAreaWaterContainer from "../maxAreaWaterContainer"; // Assuming maxAreaWaterContainer.js is in the same directory

describe('maxAreaWaterContainer', () => {
    it('should return 0 for an empty container', () => {
        expect(maxAreaWaterContainer([])).toBe(0);
    });

    it('should return the height for a single element container', () => {
        expect(maxAreaWaterContainer([1])).toBe(1);
    });

    it('should return the max area water for a given array of water levels', () => {
        expect(maxAreaWaterContainer([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
    });

    it('should return the max area water for a given array of water levels', () => {
        expect(maxAreaWaterContainer([1, 2, 1])).toBe(2);
    });
});
