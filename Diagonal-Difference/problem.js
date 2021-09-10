function diagonalDifference(arr) {

    let leftDiagonal = 0, rightDiagonal = 0

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i === j) leftDiagonal += arr[i][j]
            if (i + j + 1 === arr.length) rightDiagonal += arr[i][j]
        }
    }

    return Math.abs(leftDiagonal - rightDiagonal)

}
