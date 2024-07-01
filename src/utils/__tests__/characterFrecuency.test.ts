import characterFrecuency from '../characterFrequency';

describe('characterFrecuency', () => {
    it('should return the total number of letters sorted within the given word', () => {
        const result = characterFrecuency("missisipi");
        expect(result).toEqual([['i', 4], ['m', 1], ['p', 1], ['s', 3]]);
    });
    it('should return empty array', () => {
        const result = characterFrecuency("");
        expect(result).toEqual([]);
    });

});
