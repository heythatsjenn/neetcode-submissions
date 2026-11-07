class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */

    productExceptSelf(nums) {
        const products = []
        const backwardProducts = []
        for (let i =0; i< nums.length ; i++){
            products[i] = (products[i -1] ?? 1) * nums[i]
        }
        for (let k = nums.length -1 ; k >=0  ; k--){
            backwardProducts[k] = (backwardProducts[k + 1] ?? 1 )* nums[k]
        }

        return nums.map((_, index) => (products[index - 1] ?? 1) * (backwardProducts[index + 1] ?? 1))
    }
}
