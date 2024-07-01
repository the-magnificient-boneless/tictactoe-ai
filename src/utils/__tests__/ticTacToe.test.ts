import ticTacToe from '../ticTacToe'

describe('ticTacToe', () => {
    it('should return player "A" as winner ', () => {
        const result = ticTacToe([[0, 0], [2, 0], [0, 1], [2, 1], [0, 2]])
        expect(result).toEqual("A")
    })
    it('should return player "B" as winner ', () => {
        const result = ticTacToe([[0, 0], [1, 0], [0, 1], [1, 1], [2, 0], [1, 2]])
        expect(result).toEqual("B")
    })
    it('should return player "A" as winner ', () => {
        const result = ticTacToe([[2, 0], [2, 0], [2, 1], [0, 2], [2, 2]])
        expect(result).toEqual("A")
    })
    it('should return player "B" as winner ', () => {
        const result = ticTacToe([[1, 1], [0, 0], [0, 1], [1, 0], [2, 2], [2, 0]])
        expect(result).toEqual("B")
    })

    it('should return player "A" as winner ', () => {
        const result = ticTacToe([[0, 1], [0, 2], [1, 1], [1, 0], [2, 1]])
        expect(result).toEqual("A")
    })

    it('should return player "B" as winner ', () => {
        const result = ticTacToe([[1, 0], [0, 2], [1, 1], [1, 2], [2, 1], [2, 2]])
        expect(result).toEqual("B")
    })

    it('should return player "A" as winner ', () => {
        const result = ticTacToe([[0, 0], [0, 2], [1, 1], [1, 2], [2, 2]])
        expect(result).toEqual("A")
    })
    it('should return player "B" as winner ', () => {
        const result = ticTacToe([[0, 0], [0, 2], [1, 0], [1, 1], [2, 2], [2, 0]])
        expect(result).toEqual("B")
    })

    it('should return "draw" game', () => {
        const result = ticTacToe([[0, 0], [1, 1], [2, 0], [1, 0], [1, 2], [2, 1], [0, 1], [0, 2], [2, 2]])
        expect(result).toEqual("draw")
    })
    it('should return false for a game in progress, no winner, no loser, no draw', () => {
        const result = ticTacToe([[0, 0], [1, 1], [2, 0], [1, 0], [1, 2], [2, 1], [0, 1], [0, 2]])
        expect(result).toEqual(false)
    })
    it('must throw error for invalid number of moves in a game', () => {
        expect(() => {
            ticTacToe([[0, 0], [1, 1], [2, 0], [1, 0], [1, 2], [2, 1], [0, 1], [0, 2], [0, 2], [0, 2], [0, 2]])
        }).toThrow('Something went wrong, there must be up to 9 moves')
    });
})
