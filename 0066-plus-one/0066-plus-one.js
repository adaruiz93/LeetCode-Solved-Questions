/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
     //join the digits with no space and add 1  
    let str = digits.join("");
    let num = BigInt(str)+ BigInt(1);
    // convert num into array
    num = num.toString().split('').map((num) => parseInt(num));
    return num;
};