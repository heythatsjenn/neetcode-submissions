class Solution {
    /**
     * existe solução brute force (O(nˆ2))
     * existe guardar todas as letras de um em hash map, depois ir diminuindo os valores, aí passar por todos esses valores e ver se tem um q não é zero
     * existe sorting e dps comparação
     * 
     * 
     */

    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const sLetters = {}

        s.split("").forEach(letter => {
            if(sLetters[letter]){
                sLetters[letter] = sLetters[letter] + 1
            } else {
                sLetters[letter] = 1
            }
        })

        t.split("").forEach(letter => {
            sLetters[letter] = sLetters[letter] - 1
        })

        return Object.values(sLetters).every(number => number === 0)
    }
}
