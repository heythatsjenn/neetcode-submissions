class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let p1 = 0
        let p2 = heights.length - 1

        let highest = 0

        while (p1 < p2){
            let currentArea = 0
            let indexDiff = p2 - p1

            if(heights[p1] > heights[p2]){
                currentArea = heights[p2] * indexDiff
                p2--
            } else{
                currentArea = heights[p1] * indexDiff
                p1++
            }
            if(currentArea > highest){
                highest = currentArea
                console.log(currentArea, heights[p1], heights[p2], p1, p2)

            }
        }

        return highest
    }
}

//area = height of lowest bar * distance between them
//area = lowest number among chosen * index difference

// highest numbers that are farther apart
// two pointers!

//when do we decide to move? lets move the lowest height bar?
