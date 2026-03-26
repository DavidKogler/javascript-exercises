const repeatString = function(str, reps) {
    // return str.repeat(reps); --> Not allowed to fulfill this exercise, do manually
    if (reps > 0) {
        let addStr = str;

        for (let i = 0; i < reps - 1; i++) {
            str += addStr;
        }
        console.log(str);
        return str;
    } else if (reps < 0) {
        return "ERROR";
    } else return "";
};

// Do not edit below this line
module.exports = repeatString;
