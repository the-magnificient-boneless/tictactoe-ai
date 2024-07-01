import findKthLargest from '../findKthLargest';

describe('findKthLargest', () => {
    it('should return 5', () => {
        const result = findKthLargest([3, 2, 1, 5, 6, 4], 2);
        expect(result).toEqual(5);
    });
    it('should return 4', () => {
        const result = findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4);
        expect(result).toEqual(4);
    });

});
