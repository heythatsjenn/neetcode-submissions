class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if(strs.length === 1 && strs[0] === ""){
            return "empty string"
        }
        return strs.join("secretcode")
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if(str === "empty string"){
            return [""]
        }
        return str ? str.split("secretcode") : []
    }
}
