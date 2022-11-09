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
};

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
};


const numberBtns = document.querySelectorAll('button.number');
const operatorBtns = document.querySelectorAll('button.operator')
const display = document.querySelector('#display')
var content = document.createElement('div')
var content2 = document.createElement('div')
let userNumber = ""
let userNumberOne = ""
let userNumberTwo = ""
let userOperator = ""
  
function displayNumber(){
  
        numberBtns.forEach((btn)=>{
            btn.addEventListener('click', function(e) {
                content.innerHTML += `${e.target.id}`
                userNumber += e.target.id
                display.appendChild(content)
                if (userOperator == ""){
                adOperator() 
                }
                
            });
        });   
    };

function adOperator(){
    operatorBtns.forEach((btn)=>{
        btn.addEventListener('click',(e)=>{
            userOperator = e.target.id
            userNumberOne = userNumber
            content.innerHTML = ""
            userNumber = ""
            displayNumber()
        });
    });
};


displayNumber()



