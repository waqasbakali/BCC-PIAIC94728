var num = prompt('Guess the secret number');
var secretnumber = 5;
if(num  ==secretnumber){
    alert('Bingo! Correct answer')
    document.write('Bingo! Correct answer')                    
}else if(++num  ==secretnumber){
    alert('Close enough to the correct answer')
    document.write('Close enough to the correct answer')                    
}else{
alert('Sorry! Try again')
    document.write('Sorry! Try again')                    
}


