const baseCharCode = 97

const convertToArray = (string) => {
    const arr = new Array(26).fill(0)
    
    for (const s of string) {
        arr[s.charCodeAt(0) - "a".charCodeAt(0)] += 1
    }

    return arr
}


class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const anagramsObj = {}

        strs.forEach(string =>{
            const strArr = convertToArray(string)
            if(anagramsObj[strArr] === undefined){
                anagramsObj[strArr] = []
            }
           
            anagramsObj[strArr].push(string)
        })

        return Object.values(anagramsObj)
    }
}
