/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if(n === 0) return 1;
    let result = 1, num = Math.abs(n), count = Math.floor(num/2);
        while(count > 0){
        result *= x;
        count--;
    }
    result = result * result;
    if(num%2 === 1) result = result * x;
    
    if(n < 0) result = 1 / result;   
    return result;    
};
