/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining = function(n, m) {
    let arr = new Array(n);
    let count = 0;
    for (let i = 0; i < n.length; i++) {
        arr [i] = i
    }
    do {
        count = (count + m - 1) % arr.length;
        arr.splice(count, 1);
    }while (arr.length > 1)
    return arr[0];
}