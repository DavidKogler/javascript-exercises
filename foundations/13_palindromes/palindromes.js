const palindromes = function (text) {
    let cleanText = text
                    .toLowerCase()
                    .replaceAll(" ", "")
                    .replaceAll(",", "")
                    .replaceAll(".", "")
                    .replaceAll("!", "")
                    .toLowerCase();
    let textArr = cleanText.split("");
    let revText = textArr.reverse().join("");
    return cleanText === revText;
};

// Do not edit below this line
module.exports = palindromes;
