import rotateMatrix from '../rotateMatrix'

describe('rotateMatrix', () => {

    it('should return the same matrix', () => {
        const result = rotateMatrix([[0]])
        expect(result).toEqual([[0]])
    })

    it('should return a 2x2 rotated matrix', () => {
        const result = rotateMatrix([[1, 2], [3, 4]])
        expect(result).toEqual([[3, 1], [4, 2]])
    })
    it('should return a 3x3 rotated matrix', () => {
        const result = rotateMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
        expect(result).toEqual([[7, 4, 1], [8, 5, 2], [9, 6, 3]])
    })
    it('should return a 4x4 rotated matrix', () => {
        const result = rotateMatrix([[5, 1, 9, 11],
        [2, 4, 8, 10],
        [13, 3, 6, 7],
        [15, 14, 12, 16]])
        expect(result).toEqual([[15, 13, 2, 5],
        [14, 3, 4, 1],
        [12, 6, 8, 9],
        [16, 7, 10, 11]])
    })
    it('Should throw an error for invalid input', () => {
        expect(() => {
            rotateMatrix([[1, 2, 3], [5, 6], [7, 8, 9]])
        }).toThrow('Matrix must contain equal number of elements per row as per column')
    })
    it('Should throw an error for invalid input', () => {
        expect(() => {
            rotateMatrix([[1, 2, 3], [7, 8, 9]])
        }).toThrow('Matrix must contain equal number of elements per row as per column')
    })
})
