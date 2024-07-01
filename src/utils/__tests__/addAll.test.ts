import addAll from '../addAll'

describe('addAll', () => {
    it('should return the sum of each element within the list', () => {
        const result = addAll([2, 7, 8, 3, 1, 4])
        expect(result).toEqual(25)
    })
})
