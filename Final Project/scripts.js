function calc(){
    var numOne = document.getElementById('numOne').value;
    var numOne = document.getElementById('numTwo').value;
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
