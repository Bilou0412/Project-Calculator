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
        return add(numberOne,numberTwo);
    }
    else if(operator == "-") {
        return subtract(numberOne,numberTwo);
    }
    else if( operator == "/" ){
        return divide(numberOne,numberTwo);
    }
    else if( operator == "*"){
        return multiply(numberOne,numberTwo);
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
let userOperator1  
function displayNumber(){
  
        numberBtns.forEach((btn)=>{
            if(userOperator == "" && userNumberTwo == ""){
                btn.addEventListener('click', function(e) {
                    content.innerHTML += `${e.target.id}`
                    userNumberTwo += e.target.id
                    display.appendChild(content);
                    adOperator();  
            });  
            }else if(userOperator1 == "="){
                adOperator();
            }
        });
    };

function adOperator(){
    operatorBtns.forEach((btn)=>{
            btn.addEventListener('click',(e)=>{
                if((e.target.id == "+"||e.target.id == "*"||e.target.id == "-"||e.target.id == "/") && userOperator1 != "true"){
                    userOperator = e.target.id
                    userNumberOne = userNumberTwo
                    content.innerHTML = ""
                    userNumberTwo = ""
                    userOperator1 = "true"
                    displayNumber();
                }else if(e.target.id == "=" && userOperator1 != "="){
                    userOperator1 = "="
                    userNumberTwo = (operate(Number(userNumberOne),userOperator,Number(userNumberTwo)))
                    content.innerHTML = `${userNumberTwo}`
                    userNumberOne = ""
                    displayNumber();
                }
                
            });
        });
    
};


displayNumber();



