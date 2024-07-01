import mergeOverlap from '../mergeOverlap';

describe('mergeOverlap', () => {
    it('should merge overlaps', () => {
        const result = mergeOverlap([[1, 3], [2, 6], [8, 10], [15, 18]]);
        expect(result).toEqual([[1, 6], [8, 10], [15, 18]]);
    });
    it('should merge overlaps', () => {
        const result = mergeOverlap([[1, 3], [4, 10], [6, 12], [11, 18]]);
        expect(result).toEqual([[1, 3], [4, 18]]);
    });

});
