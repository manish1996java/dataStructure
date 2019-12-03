const factorial = function(value){
    if(value === 1){
        return value;
    }else{
        return value * factorial(value -1);
    }
}