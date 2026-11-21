class Solution {
    search(nums, target) {
        let start = 0
        let end = nums.length - 1

        while (start <= end) {
            let middle = Math.floor((end - start) / 2) + start

            if (target < nums[middle]) {
                end = middle - 1
            } else if (target > nums[middle]) {
                start = middle + 1
            } else {
                return middle
            }
        }
        return -1
    }
}
