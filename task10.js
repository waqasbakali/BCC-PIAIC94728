var correctpassword = 'blockchain@1';

var inputpassword = prompt('Enter your password') 

 if(inputpassword == '' || inputpassword == undefined){
     alert("Please enter your password")
    document.write('Please enter your password')                    
 }

if(correctpassword === inputpassword){
    alert("Correct! The password you entered matches the original password")
    document.write('Correct! The password you entered matches the original password')
 }else{
     alert("The password you entered is incorrect")
    document.write('The password you entered is incorrect')
 }