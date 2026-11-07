const baseCharCode = 97

const convertToArray = (string) => {
    const arr = []
    string.split("").forEach(char => {
        charCode = char.charCodeAt(0) - baseCharCode
        if(!arr[charCode]){
            arr[charCode] = 1
        } else {
            arr[charCode] = arr[charCode] +1
        }
    })
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
