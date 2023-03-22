function calculate(){
    var numOne = parseFloat(document.getElementById('numOne').value);
    var numTwo = parseFloat(document.getElementById('numTwo').value);
    var operator = document.getElementById('ops').value;

    if(operator === '+'){
        document.getElementById('result').value = numOne+numTwo;    
    }
    else if(operator === '-'){
        document.getElementById('result').value = numOne-numTwo;        
    }
    else if(operator === '*'){
        document.getElementById('result').value = numOne*numTwo;        
    }
    else if(operator === '/'){
        document.getElementById('result').value = numOne/numTwo;        
    }
}
