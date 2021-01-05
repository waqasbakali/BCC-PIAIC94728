                var color = prompt('Enter traffic light color, Red/Yellow/Green');
                color = color.toString().toLocaleLowerCase()
               if(color == 'red'){
                   alert('Must Stop')
                   document.write('Must Stop')

                }else if(color == 'yellow'){
                   alert('Ready to move')
                   document.write('Ready to move')

                }else if(color == 'green'){
                   alert('Move now')
                   document.write('Move now')
               }else{
                   alert('Provided traffic light color is not found')
                   document.write('Provided traffic light color is not found')
               }