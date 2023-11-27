const reverseString = function(_string) {
    let length = _string.length;
    let reversedString = '';
    for (let i=(length-1); i>=0; i--){
        reversedString += _string[i];
    }
    return reversedString
};

// Do not edit below this line
module.exports = reverseString;
