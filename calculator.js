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
const clearBtn = document.querySelector('#clear')
const deletBtn = document.querySelector('#delete')
const display = document.querySelector('#display')
var content = document.createElement('div')
let userNumberOne = ""
let userNumberTwo = ""
let userOperator = ""
let passOperator = "false"

numberBtns.forEach((btn)=>{
    btn.addEventListener('click',function(e){
        displayNumber(e.target.id)  
    })
});

operatorBtns.forEach((btn)=>{
    btn.addEventListener('click',function(e){
        adOperator(e.target.id)
    })
});

clearBtn.addEventListener('click',function(){
    clear()
});

deletBtn.addEventListener('click',function(){
    delete1()
});

function delete1(){
    array = userNumberTwo.split('') 
    array.pop()
    array = array.toString().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g,"")
    userNumberTwo = array
    content.innerHTML = `${userNumberTwo}`
}

function clear(){
    userNumberOne = ""
    userNumberTwo = ""
    userOperator = ""
    content.innerHTML = ""
    passOperator = "false"
}

function displayNumber(value){
    if(passOperator == "true"){
        content.innerHTML = ""
        passOperator = "false" 
    }
    userNumberTwo += value
    content.innerHTML += `${value}`
    display.appendChild(content);
};

function adOperator(valueOperator){
    if((valueOperator == "+"||valueOperator == "*"||valueOperator == "-"||valueOperator == "/")&&(userNumberOne === "")){
        userOperator = valueOperator
        userNumberOne = userNumberTwo
        userNumberTwo = ""
        content.innerHTML = ""
    }else if(valueOperator == "="){
        userNumberTwo = (operate(Number(userNumberOne),userOperator,Number(userNumberTwo)))
        content.innerHTML = `${userNumberTwo}`
        userNumberOne = ""
        passOperator = "true"
    }else if((valueOperator == "+"||valueOperator == "*"||valueOperator == "-"||valueOperator == "/")&&(userOperator == "+"||userOperator == "*"||userOperator == "-"||userOperator == "/")){
        userNumberTwo = (operate(Number(userNumberOne),userOperator,Number(userNumberTwo)))
        content.innerHTML = `${userNumberTwo}`
        userOperator = valueOperator
        userNumberOne = userNumberTwo
        userNumberTwo = ""
        passOperator = "true"
    }
};