import multiplyFromString from '../multiplyFromString';

describe('multiplyFromString', () => {
    it('multiply 2 given strings params', () => {
        const result = multiplyFromString("1", "2");
        expect(result).toEqual(2);
    });
    it('multiply 2 given strings params', () => {
        const result = multiplyFromString("100", "2");
        expect(result).toEqual(200);
    });
    it('multiply 2 given strings params', () => {
        const result = multiplyFromString("2000", "2");
        expect(result).toEqual(4000);
    });
    it('multiply 2 given strings params', () => {
        const result = multiplyFromString("1234567890", "1");
        expect(result).toEqual(1234567890);
    });
    it('must throw an error for the input allowed', () => {
        expect(() => {
            multiplyFromString("1s", "2")
        }).toThrow('Only numbers are allowed')
    });
    it('must throw an error for the input allowed', () => {
        expect(() => {
            multiplyFromString("01", "2")
        }).toThrow('0 cannot be leading a string that represents a number')
    });
    it('must throw an error for input length', () => {
        expect(() => {
            multiplyFromString("", "2")
        }).toThrow('Input string length must be greater than 0 and less or equal to 200')
    });
    it('must throw an error for input length', () => {
        expect(() => {
            multiplyFromString("123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890", "2")
        }).toThrow('Input string length must be greater than 0 and less or equal to 200')
    });
    /*
        it('must throw error for invalid invalid candidates values', () => {
            const candidates = [51];
            const target = 8;
            expect(() => {
                multiplyFromString(candidates, target)
            }).toThrow('A candidate number should be between 1 and 50.')
        });
        it('must throw error for invalid invalid candidates values', () => {
            const candidates = [51];
            const target = 8;
            expect(() => {
                multiplyFromString(candidates, target)
            }).toThrow('A candidate number should be between 1 and 50.')
        });
        it('must throw error for invalid target value', () => {
            const candidates = [10, 1, 2, 7, 6, 1, 5];
            const target = 31;
            expect(() => {
                multiplyFromString(candidates, target)
            }).toThrow('The target number should be between 1 and 30.')
        }); */
});
