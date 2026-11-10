class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if (s.length <= 1) {
            return s.length
        }

        let p1 = 0
        let p2 = 0
        let longest = 0

        const strChars = Object.create(null)

        while (p2 <= s.length - 1) {
            if (strChars[s[p2]] !== undefined) {
                p1 = Math.max(p1, strChars[s[p2]] + 1)
            }

            strChars[s[p2]] = p2
            p2++

            if (p2 - p1 > longest) {
                longest = p2 - p1
            }

        }

        return longest
    }
}