import removeNthFromHead from '../removeNthFromHead';

describe('removeNthFromHead', () => {
    it('should remove the nth element from the head of the array', () => {

        const list = [1, 2, 3, 4, 5];
        const nth = 2;

        // Act
        const result = removeNthFromHead(list, nth);

        // Assert
        expect(result).toEqual([1, 2, 3, 5]); // The third element (3) is removed
    });

    it('should return the original array if the index to remove is out of bounds', () => {

        const list = [1, 2, 3, 4, 5];
        const nth = 6; // Index out of bounds

        // Act
        const result = removeNthFromHead(list, nth);

        // Assert
        expect(result).toEqual(list); // The array remains unchanged
    });

    it('should return the original array if the list is empty', () => {

        const list: number[] = [];
        const nth = 1;

        // Act
        const result = removeNthFromHead(list, nth);

        // Assert
        expect(result).toEqual(list); // The array remains unchanged
    });

    it('should return the original array if the nth value is negative', () => {

        const list = [1, 2, 3, 4, 5];
        const nth = -2;

        // Act
        const result = removeNthFromHead(list, nth);

        // Assert
        expect(result).toEqual(list); // The array remains unchanged
    });
});
