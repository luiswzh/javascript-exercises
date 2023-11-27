const convertToCelsius = function(tempF) {
  //Formula (x-32)*5/9
  let converted = (tempF-32)*5/9;

  if((converted%1)!=0){
    return Number(converted.toFixed(1));
  }else{
    return Number(converted.toFixed(0));
  }
  
};

const convertToFahrenheit = function(tempC) {
  //Formula x*5/9+32
  let converted = tempC*9/5+32;

  if((converted%1)!=0){
    return Number(converted.toFixed(1));
  }else{
    return Number(converted.toFixed(0));
  }
  
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
