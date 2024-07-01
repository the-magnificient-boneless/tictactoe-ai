import getNthUglyNumber from '../getNthUglyNumber';

describe('getNthUglyNumber', () => {
    it('Should return Nth Ugly Number', () => {

        const result = getNthUglyNumber(10);
        expect(result).toEqual(12);
    });

    it('must throw error for a non positive integer', () => {
        expect(() => {
            getNthUglyNumber(-1)
        }).toThrow('given number has to be a positive integer')
    });
});
