import getPrimesFrom from '../getPrimesFrom';

describe('Get array prime numbers from given number to smallest number', () => {
    it('should return primes from 100 to 1', () => {
        const from = 96;
        const result = getPrimesFrom(from);
        expect(result).toEqual([
            89, 83, 79, 73, 71, 67, 61,
            59, 53, 47, 43, 41, 37, 31, 29,
            23, 19, 17, 13, 11, 7, 5, 3,
            2, 1
        ]);
    });

});
