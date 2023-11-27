const removeFromArray = function(arrayToFilter) {
    let numberOfArguments = arguments.length-1;
    let filteredArray = arrayToFilter;

    for (let i=1; i<=numberOfArguments; i++){
        filteredArray = filteredArray.filter((value)=>(value !== arguments[i]));
    }
    return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
