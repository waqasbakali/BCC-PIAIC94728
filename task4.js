var marksobt = prompt('Enter obtained marks in 3 subject');
               var totalmarks = 300;

               var percentage = ((marksobt / totalmarks) * 100);
                var grade = ''
                var remarks = ''

                if(percentage >= 80){
                    grade = 'A-one'
                    remarks = 'Excellent'
                }else if(percentage >= 70){
                    grade = 'A'
                    remarks = 'Good'
                }else if(percentage >= 60){
                    grade = 'B'
                    remarks = 'You need to improve'
                }else if(percentage < 60){
                    grade = 'Fail'
                    remarks = 'Sorry'
                }

               document.write('Total marks: '+totalmarks)                    
               document.write("<br />")                    
               document.write("Marks obtained: "+marksobt)                    
               document.write("<br />")                    
               document.write("Percentage: "+percentage+'%')                    
               document.write("<br />")                    
               document.write("Grade: "+grade)                    
                document.write("<br />")                    
               document.write("Remarks: "+remarks)                    
