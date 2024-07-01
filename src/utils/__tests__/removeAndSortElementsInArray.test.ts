import removeAndSortElementsInArray from '../removeAndSortElementsInArray'

describe('removeAndSortElementsInArray', () => {
    it('should return unique sorted elements in array', () => {
        const result = removeAndSortElementsInArray([-1, 0, 1, 2, -1, -4])
        expect(result).toEqual([-4, -1, 0, 1, 2])
    })
})
