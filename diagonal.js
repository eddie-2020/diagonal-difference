function diagonalDifference(arr) {
    // Write your code here
    let size = arr.length
    let diagonal_1 = 0
    let diagonal_2 = 0
    
    for(let i = 0; i < size; i ++) {
        diagonal_1 = diagonal_1 +  arr[i][i]
        diagonal_2 = diagonal_2 + arr[i][size - i - 1]
    }   
    return Math.abs(diagonal_1 - diagonal_2);
}
