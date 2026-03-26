const sumAll = function(val1, val2) {
    // works, but instead of Math.floor use Number.isInteger(val)
    if (Math.floor(val1) !== val1 || Math.floor(val2) !== val2 ||
        val1 < 0 || val2 < 0) {
        return "ERROR";
    }

    let sum = 0;
    let start = 0;
    let end = 0;
    
    if (val1 <= val2) {
        start = val1;
        end = val2;
    } else {
        start = val2;
        end = val1;
    }
    
    for (let i = start; i <= end; i++) {
        sum += i;
    }

    return sum;
    // also check the solution again for a way cleaner way to do it
};

// Do not edit below this line
module.exports = sumAll;
