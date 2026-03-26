const leapYears = function(year) {
    // although your code below works, you won't have any idea what it is doing later
    // try to write it in a more readable way
    //return (year % 4 === 0 && (!(year % 100 === 0) || year % 400 === 0)) ? true : false;
    const isDivByFour = year % 4 === 0;
    const isDivByHundred = year % 100 === 0;
    const isDivByFourHundred = year % 400 === 0;

    return (isDivByFour && (!isDivByHundred || isDivByFourHundred)) ? true : false;
};

// Do not edit below this line
module.exports = leapYears;
