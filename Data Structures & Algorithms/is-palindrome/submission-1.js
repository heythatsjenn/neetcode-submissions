class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

        const sanitized = s.toLowerCase().replace(/[^a-z0-9]/g, "")

        for (let i = 0; i < sanitized.length; i++){
            if(sanitized[i] !== sanitized[sanitized.length - i - 1]) {
                return false
            }
        }

        return true
    }
}
