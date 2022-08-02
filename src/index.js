module.exports = function towelSort(matrix) {
    if (matrix == undefined) {
        return []
    } else 
        if (matrix.length > 0 && matrix) {
        let result = [];
        for (let i = 0; i < matrix.length; i++) {
            for (let x = 0; x < matrix[i].length; x++) {
                if (i % 2 === 0) {
                    result.push(matrix[i][x]);
                } else {
                    result.push(matrix[i][matrix[i].length - x - 1]);
                }
            }
        }
        return result;
    } else if (matrix.length == 0) {
        return []
    }
}
