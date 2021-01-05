var num1 = parseInt(prompt('Enter 1st number'));
               var num2 = parseInt(prompt('Enter 2nd number'));
               var oper = prompt('Enter operator for calculation eg: /, *, +, -, %');
                result = ''
                
                if(oper == '+'){
                    result = num1 + num2;
                }

                if(oper == '-'){
                    result = num1-num2;
                }

                if(oper == '*'){
                    result = num1*num2;
                }

                if(oper == '/'){
                    result = num1/num2;
                }

                if(oper == '%'){
                    result = num1%num2;
                }

                alert(result)
                document.write('Result is: '+result)             