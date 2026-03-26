const reverseString = function(text) {
    let reverse = "";

    for (i = text.length - 1; i >= 0; i--) {
        reverse += text[i];
    }

    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
