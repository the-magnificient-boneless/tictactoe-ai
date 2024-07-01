import gameJumpsII from '../gameJumpsII';

describe('Game Jumps II', () => {
    it('Sample Case', () => {
        const nums = [2, 3, 1, 1, 4];
        const result = gameJumpsII(nums);
        expect(result).toEqual(2);
    });

    it('Single element array', () => {
        const nums = [0];
        const result = gameJumpsII(nums);
        expect(result).toEqual(0);
    });
});
