function isPalindrome(string: string) {
	return string === string.split('').reverse().join('')
}
function findLongestPalindrome(string: string): string[] {
	const palindromes = []
	let longestSubstring = 1

	//Iterate substrings and check if there are palindromes
	for (let i = 0; i < string.length; i++) {
		for (let j = i + 1; j <= string.length; j++) {
			const substring = string.substring(i, j)
			if (isPalindrome(substring)) {
				if (substring.length > longestSubstring) {
					//Verify longest palindrome
					longestSubstring = substring.length
					palindromes.push(substring)
				}
			}
		}
	}
	return palindromes
}
export default findLongestPalindrome
