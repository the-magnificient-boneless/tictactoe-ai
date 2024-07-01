import generateParenthesis from '../generateParenthesis';

describe('generateParenthesis', () => {
    it('should create valid open closing parenthesis combinations', () => {
        const result = generateParenthesis(3);
        expect(result).toEqual(['((()))', '(()())', '(())()', '()(())', '()()()']);
    });

});
