class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */

    productExceptSelf(nums) {
        const outputArr = Array.from({ length: nums.length }, () => [])
        
        for (let i =0; i< nums.length ; i++){
            outputArr[i].push((outputArr[i - 1]?.[0] ?? 1) * nums[i]) 
        }
        for (let k = nums.length -1 ; k >=0  ; k--){
            outputArr[k].push((outputArr[k + 1]?.[1] ?? 1) * nums[k]) 
        }


        return nums.map((_, index) => (outputArr[index - 1]?.[0] ?? 1) * (outputArr[index + 1]?.[1] ?? 1))
    }
}
