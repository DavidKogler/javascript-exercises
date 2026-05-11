const findTheOldest = function(array) {
    array.sort((a, b) => {
            let currYear = new Date().getFullYear();
            let aDeathYear = a.yearOfDeath ? a.yearOfDeath : currYear;
            let bDeathYear = b.yearOfDeath ? b.yearOfDeath : currYear;
            return (bDeathYear - b.yearOfBirth) - (aDeathYear - a.yearOfBirth)
        });
    return array[0];
};

// Do not edit below this line
module.exports = findTheOldest;
