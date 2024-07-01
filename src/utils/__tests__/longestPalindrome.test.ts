import longestPalindrome from '../longestPalindrome';

describe('longestPalindrome', () => {
    it('should return an array with longest substring', () => {
        const string = "babad";
        const result = longestPalindrome(string);
        // Assert
        expect(result).toEqual(["bab"]);
    });
    it('should return an empty array', () => {
        const string = "abcde";
        const result = longestPalindrome(string);
        // Assert
        expect(result).toEqual([]);
    });

});
