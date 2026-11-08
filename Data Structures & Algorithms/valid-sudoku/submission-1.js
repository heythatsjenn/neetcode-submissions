class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */

    // if there arent any duplicates in box, line or column

    isValidSudoku(board) {

        const createTrackerObj = () => Object.fromEntries(
            Array.from({ length: 9 }, (_, index) => [index, new Set()])
        );
        const rowsObj = createTrackerObj()
        const squaresObj = createTrackerObj()
        const colsObj = createTrackerObj()

        const rowLen = board[0].length

        for (let row = 0; row < board.length; row++){
            for(let col = 0; col < rowLen; col++){
                const currentVal = board[row][col]

                if(currentVal === "."){
                    continue
                }

                if(rowsObj[row].has(currentVal)){
                    return false
                }

                rowsObj[row].add(currentVal)

                if(colsObj[col].has(currentVal)){
                    return false
                }

                colsObj[col].add(currentVal)

                const blockRow = Math.floor(row/3)
                const blockCol = Math.floor(col/3)

                const currentSquare = blockRow * 3 + blockCol

                if(squaresObj[currentSquare].has(currentVal)){
                    return false
                }

                squaresObj[currentSquare].add(currentVal)

            }
        }


        return true
    }
}
