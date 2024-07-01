import pathTriangle from '../pathTriangle'

describe('pathTriangle', () => {
    it('should return the min path sum path from top to bottom', () => {
        const result = pathTriangle([
            [2],
            [3, 4],
            [6, 5, 7],
            [4, 1, 8, 3]
        ])
        expect(result).toEqual(11)
    })
})
