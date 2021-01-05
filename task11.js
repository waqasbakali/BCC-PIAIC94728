                 var time = prompt('Enter time in 24hour format: 1900 = 7:00 pm');
                time = parseInt(time)

                if(time == 0000 && time < 1200 ){
                    alert("Good Morning");
                    document.write("Good Morning");

                }else if(time >= 1200 && time < 1700){
                    alert("Good Afternoon");
                    document.write("Good Afternoon");

                }else if(time >= 1700 && time < 2100){
                    alert("Good Evening");
                    document.write("Good Evening");
                    
                }else if(time >= 2100 && time < 3259){
                    alert("Good Night");
                    document.write("Good Night");
                    
                }else{
                    alert("Invalid format, please enter like 1900 or 1700 or 1730");
                    document.write("Invalid format, please enter like 1900 or 1700 or 1730");

                }
