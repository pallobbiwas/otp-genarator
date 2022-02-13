function genarelButton(){
    const myPin = sure4Digit();
    const displayPin = document.getElementById('display');
    displayPin.value = myPin;
    return displayPin;
}
function sure4Digit() {
    const randomPin = Math.round(Math.random()*10000);
    const pinString = randomPin + '';
    if(pinString.length == 4){
        return randomPin;
    }else{
        return sure4Digit();
        // console.log('fffff',randomPin );
    }
}
document.getElementById('calculator-key-pad').addEventListener('click',function(event){
    const number = event.target.innerText;
    const calcInput = document.getElementById('display-calc');
    if(isNaN(number)){
        if(number == 'C'){
            calcInput.value = '';
        }
    }
    else{
        const previousNumber = calcInput.value;
        const calcCurrentNumber = previousNumber + number;
        calcInput.value = calcCurrentNumber;
    }
    return calcInput;
})
function varifyPin() {
    const pin = document.getElementById('display').value;
    const inputPin = document.getElementById('display-calc').value;
    const success = document.getElementById('match');
    const error = document.getElementById('dont-match');
    if(pin == inputPin){        
        success.style.display = 'block'
        error.style.display = 'none'
    }else{     
        error.style.display = 'block'
        success.style.display = 'none'
    }
    const cleanPin = genarelButton()
    cleanPin.value = '';
}