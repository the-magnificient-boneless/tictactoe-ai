import swapElementsRecursion from '../swapElementsRecursion'

describe('swapElementsRecursion', () => {
    it('should return a swaped array', () => {
        const result = swapElementsRecursion([2, 7, 8, 3, 1, 4])
        expect(result).toEqual([7, 2, 3, 8, 4, 1])
    })
    it('should return a swaped array', () => {
        const result = swapElementsRecursion([3, 6, 8, 1, 5])
        expect(result).toEqual([6, 3, 1, 8, 5])
    })
    it('should return an empty array', () => {
        const result = swapElementsRecursion([])
        expect(result).toEqual([])
    })
})
