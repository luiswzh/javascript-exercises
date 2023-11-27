const repeatString = function(repeatingText,repetitions) {
    if(repetitions<0){
        return 'ERROR';
    }
    let repeatedText = '';
    for (let i=0; i<repetitions; i++){
        repeatedText += repeatingText;
    }
    return repeatedText;
};

// Do not edit below this line
module.exports = repeatString;
