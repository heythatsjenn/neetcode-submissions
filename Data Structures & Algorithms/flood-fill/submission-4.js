class Solution {
    /**
     * @param {number[][]} image
     * @param {number} sr
     * @param {number} sc
     * @param {number} color
     * @return {number[][]}
     */

    floodFill(image, sr, sc, color) {
        const directions = [[-1, 0], [1, 0], [0, 1], [0, -1]]
        const firstElColor = image[sr][sc]
        const queue = [[sr, sc]]
        let currQueueEl = 0
        image[sr][sc] = color

        if(color === firstElColor){
            return image
        }

        while (currQueueEl < queue.length){
            const [currRow, currCol] = queue[currQueueEl]
            currQueueEl++

            const neighborCandidates = directions.map(([row, col]) => [currRow + row, currCol + col])

            neighborCandidates.forEach(([row, col]) => {
                if(row < 0 || col < 0 || row >= image.length || col >=        image[0].length || image[row][col] !== firstElColor){
                    return
                }
                queue.push([row, col])
                image[row][col] = color

            })

        }
        return image
    }
}
