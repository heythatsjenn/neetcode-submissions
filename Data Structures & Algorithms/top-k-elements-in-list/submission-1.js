class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const numsObj = {}
        nums.forEach(number => {
            if(!numsObj[number]){
                numsObj[number] = 1
            } else {
                numsObj[number] += 1
            }
        })

        const bucketArr = Array.from({ length: nums.length + 1 }, () => [])

        Object.entries(numsObj).forEach(([key, value]) => {
            bucketArr[value].push(Number(key))
        })

        const result = [];
        
       for (let frequency = bucketArr.length - 1; frequency >= 0; frequency--){
            for (const num of bucketArr[frequency]) {
                result.push(num);

                if (result.length === k) {
                    return result;
                }
            }
        }
    }
}
