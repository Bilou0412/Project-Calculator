const add = function(...array) {
    return array.reduce(
        (previousValue , currentValue) => previousValue + currentValue
    );
};

const subtract = function(...array) {
    return array.reduce(
        (previousValue, currentValue)=> previousValue - currentValue
    );
};

const multiply = function(...array) {
    return array.reduce(
      (previousValue, currentValue) => previousValue * currentValue
    );
};

const divide = function(...array){
    return array.reduce((previousValue, currentValue)=> previousValue / currentValue 
    );
}

const operate = function(numberOne , operator , numberTwo){
    if(operator == "+"){
        return add(numberOne,numberTwo)
    }
    else if(operator == "-") {
        return subtract(numberOne,numberTwo)
    }
    else if( operator == "/" ){
        return divide(numberOne,numberTwo)
    }
    else if( operator == "*"){
        return multiply(numberOne,numberTwo)
    }
}