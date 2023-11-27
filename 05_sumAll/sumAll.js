const sumAll = function(initialInt,finalInt) {
    if( typeof (initialInt+finalInt) != 'number' ){
        return 'ERROR';
    }
    if (initialInt<0 || finalInt<0){
        return 'ERROR';
    }
    
    let sum=0;
    
    if(finalInt>initialInt){
        for (let i=initialInt; i<=finalInt; i++){
            sum+=i;
        }
    } else {
        for (let i=finalInt; i<=initialInt; i++){
            sum+=i;
        }
    }
    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
