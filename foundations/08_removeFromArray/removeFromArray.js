// this works fine, but is not the best approach to do it as argument uses all 
// of the supplied parameter (including arr)
// const removeFromArray = function(arr) {
//     const args = Array.from(arguments);
//     return arr.filter(item => !args.includes(item));
// };

// therefore a more robust and direct way to do it would be to use 
// the rest (...arg) parameter
const removeFromArray = function(arr, ...args) {
    return arr.filter(item => !args.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
