
class Solution {
    /**
     * @param {character[][]} boxGrid
     * @return {character[][]}
     */
    rotateTheBox(boxGrid) {
        const newGrid = [];

        const m = boxGrid.length;
        const n = boxGrid[0].length;

        // rotate
        for (let row = m - 1; row >= 0; row--) {
            for (let col = 0; col < n; col++) {
                if (row === m - 1) {
                    newGrid.push([]);
                }

                newGrid[col][m - 1 - row] = boxGrid[row][col];
            }
        }

        // make rocks fall
        for (let col = 0; col < m; col++) {
            let lowestEmptySpace = n - 1;

            for (let row = n - 1; row >= 0; row--) {
                const currentEl = newGrid[row][col];

                if (currentEl === '*') {
                    lowestEmptySpace = row - 1;
                }

                if (currentEl === '#') {
                    newGrid[row][col] = '.';
                    newGrid[lowestEmptySpace][col] = '#';
                    lowestEmptySpace--;
                }
            }
        }

        return newGrid;
    }
}


    //rotate the matrix
    //make the rocks fall


    //idea: going from the bottom up in each col and checking.
    // if empty space, register that is the lowest empty space and go forward
    // when finding rock, reset
    // when finding more empty spaces, do nothing
    // when finding rock move that rock to the empty space

    //actually we can have a queue of empty spaces. Lets suppose multiple rocks and multiple empty spaces. We just place them in queue order... but there must be a simpler way

    // lets just say that we are in this case, we can just go to the next place after the rock. Its not an obstacle bc the rock got there!!! So we will consider the next free space the place right on top of that rock

