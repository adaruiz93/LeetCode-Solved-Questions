/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
let ans = parseFloat(x.toString().split('').reverse().join('')) 
    return Math.pow(2, 31) < ans ? 0 : ans * Math.sign(x);
};