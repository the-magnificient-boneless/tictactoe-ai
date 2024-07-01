import combinationSum2 from '../combinationSum2';

describe('combinationSum2', () => {
    it('return a ccombination for valid input', () => {
        const candidates = [10, 1, 2, 7, 6, 1, 5];
        const target = 8;
        const expected = [[1, 1, 6], [1, 2, 5], [1, 7], [2, 6]];
        const result = combinationSum2(candidates, target);
        expect(result).toEqual(expected);
    });

    it('must throw error for invalid number of candidates', () => {
        const candidates = [];
        const target = 8;
        expect(() => {
            combinationSum2(candidates, target)
        }).toThrow('The number of candidates should be between 1 and 100.')
    });

    it('must throw error for invalid invalid candidates values', () => {
        const candidates = [51];
        const target = 8;
        expect(() => {
            combinationSum2(candidates, target)
        }).toThrow('A candidate number should be between 1 and 50.')
    });
    it('must throw error for invalid invalid candidates values', () => {
        const candidates = [51];
        const target = 8;
        expect(() => {
            combinationSum2(candidates, target)
        }).toThrow('A candidate number should be between 1 and 50.')
    });
    it('must throw error for invalid target value', () => {
        const candidates = [10, 1, 2, 7, 6, 1, 5];
        const target = 31;
        expect(() => {
            combinationSum2(candidates, target)
        }).toThrow('The target number should be between 1 and 30.')
    });
});
