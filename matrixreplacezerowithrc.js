function setZeroes(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let zeroRows = new Set();
    let zeroCols = new Set();

    // Step 1: Identify all rows and columns that need to be zeroed
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === 0) {
                zeroRows.add(i);
                zeroCols.add(j);
            }
        }
    }

    // Step 2: Set the identified rows to zero
    for (let row of zeroRows) {
        for (let j = 0; j < cols; j++) {
            matrix[row][j] = 0;
        }
    }

    // Step 3: Set the identified columns to zero
    for (let col of zeroCols) {
        for (let i = 0; i < rows; i++) {
            matrix[i][col] = 0;
        }
    }
}

// Example usage:
let matrix = [
    [1, 2, 3, 4],
    [5, 0, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 0]
];

setZeroes(matrix);
console.log(matrix);

// Output:
// [
//   [1, 0, 3, 0],
//   [0, 0, 0, 0],
//   [9, 0, 11, 0],
//   [0, 0, 0, 0]
// ]
