class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let opening = []
        const counterparts = { ')': '(', '}': '{', ']': '[' }

        for (let char of s){
            if(char === "("|| char === "{" || char === "["){
                opening.push(char)
            } else {
                if(opening[opening.length - 1] === counterparts[char]){
                    opening.pop()
                } else {
                    return false
                }
            }
        }

        return !opening.length
        
    }
}
