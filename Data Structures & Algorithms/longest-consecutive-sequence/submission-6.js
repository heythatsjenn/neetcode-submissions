class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    // não precisamos ligar pra ordem na array original
    // não precisamos exatamente dos itens, só do count de quantos foram sequencia

    longestConsecutive(nums) {
        const numsObj = nums.reduce((obj, num) => { obj[num] = true; return obj; },  {})

        let maxSequence = 0

        nums.forEach(num => {
            let currentSequence = 1

            let currentLow = num - 1
            let currentHigh = num + 1
            
            while (numsObj[currentLow]){
                numsObj[currentLow] = false
                currentSequence++
                currentLow--
            }

            while (numsObj[currentHigh]){
                numsObj[currentHigh] = false
                currentSequence++
                currentHigh++
            }

            if(currentSequence > maxSequence){
                maxSequence = currentSequence
            }
        })

        return maxSequence
    }
}
