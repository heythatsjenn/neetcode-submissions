class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */

    // if there arent any duplicates in box, line or column

    isValidSudoku(board) {

        const createTrackerArr = () => Array.from({ length: 9 }, () => new Set())
        const rowsArr = createTrackerArr()
        const squaresArr = createTrackerArr()
        const colsArr = createTrackerArr()

        const rowLen = board[0].length

        for (let row = 0; row < board.length; row++){
            for(let col = 0; col < rowLen; col++){
                const currentVal = board[row][col]

                if(currentVal === "."){
                    continue
                }

                if(rowsArr[row].has(currentVal)){
                    return false
                }

                rowsArr[row].add(currentVal)

                if(colsArr[col].has(currentVal)){
                    return false
                }

                colsArr[col].add(currentVal)

                const blockRow = Math.floor(row/3)
                const blockCol = Math.floor(col/3)

                const currentSquare = blockRow * 3 + blockCol

                if(squaresArr[currentSquare].has(currentVal)){
                    return false
                }

                squaresArr[currentSquare].add(currentVal)

            }
        }


        return true
    }
}
