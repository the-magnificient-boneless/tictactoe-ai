import swapNumbers from '../swapNumbers'

describe('swapNumbers', () => {
    it('should return an ordered array', () => {
        const result = swapNumbers([1, 2, 3, 4])
        expect(result).toEqual([2, 1, 4, 3])
    })
    it('should return an empty array', () => {
        const result = swapNumbers([])
        expect(result).toEqual([])
    })
    it('should return an array with one element', () => {
        const result = swapNumbers([1])
        expect(result).toEqual([1])
    })
})
