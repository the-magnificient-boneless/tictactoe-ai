import minimunSizeSubarraySum from '../minimunSizeSubarraySum'
describe('minimunSizeSubarraySum', () => {
    it('should return a subarray of minimum size for a given number', () => {
        const result = minimunSizeSubarraySum([2, 3, 1, 2, 4, 3], 7)
        expect(result).toEqual([4, 3])
    })
    it('should return a subarray of minimum size for a given number', () => {
        const result = minimunSizeSubarraySum([2, 6, 5, 6, 7, 9, 10], 22)
        expect(result).toEqual([6, 7, 9])
    })
    it('should return an array with a 0 value', () => {
        const result = minimunSizeSubarraySum([1, 2, 3, 4, 5], 16)
        expect(result).toEqual([0])
    })
})
