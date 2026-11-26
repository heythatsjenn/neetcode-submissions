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
        const visited = {}

        while (queue.length > 0){
            const [currRow, currCol] = queue.shift()

            if(image[currRow][currCol] !== firstElColor){
                continue
            }

            const neighborCandidates = directions.map(([row, col]) => [currRow + row, currCol + col])

            neighborCandidates.forEach(([row, col]) => {
                if(row < 0 || col < 0 || row >= image.length || col >=        image[0].length || visited[[row,col]]){
                    return
                }
                queue.push([row, col])
                visited[[row, col]] = true
            })

            image[currRow][currCol] = color
        }
        return image
    }
}
