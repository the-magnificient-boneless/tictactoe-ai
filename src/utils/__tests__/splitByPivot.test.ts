import splitByPivot from '../splitByPivot';

describe('split by pivot', () => {
    it('split into 2 lower and upper arrays based on a pivot given', () => {
        const array = [2, 7, 8, 3, 1, 4];
        const pivot = 4
        const result = splitByPivot(array, pivot);
        expect(result).toEqual([[2, 3, 1], [7, 8, 4]]);
    });
    it('should return an empty array of empty arrays', () => {
        const array = [];
        const pivot = 4
        const result = splitByPivot(array, pivot);
        expect(result).toEqual([[], []]);
    });
});
