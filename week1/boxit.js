#! /usr/bin/env node


//test examples of arrays
let arrayTest = ["bob", "Jon Snow", "Cersei Lannister"];
let arrayTest2 = ["Cersei Lannister"];
const  args = process.argv.slice(2);

//boxIt main function
function boxIt (array) { 

    // first, lets find the longest string length in the array 
    longestName = findMaxCharLength(array);
    charWidth = longestName.length;
    
    //if the array length is just one item, then just build this box
    if (array.length === 1) { 
    
        console.log(drawTopLine(charWidth) + "\n");
        console.log(drawsAround (array[0]));
        console.log(drawBottomLine(charWidth));
    

     // if the array is two items long, then do this:    
    } else if (array.length === 2){ 
    
        console.log(drawTopLine(charWidth) + "\n");
        for (let i = 0; i < array.length; i++) {
           
            
            console.log(drawsAround (array[i]));
            console.log(drawsAround (array[i]));
            
          }
        console.log(drawBottomLine(charWidth) +"\n");
    
        }// end 2 cases 
    
        // otherwise just do this: 
        else { 
    
            console.log(drawTopLine(charWidth) + "\n");
            for (let i = 0; i < array.length; i++) {
               
                console.log(drawsAround (array[i])+ "\n");
                
                //if this is the last item, dont add a midline!
                if (i === array.length-1) { 

                    console.log(drawBottomLine(charWidth)+ "\n");
                    return;
                } else {
                console.log(drawMidLine(charWidth) + "\n");
                }
              }
            
        
            }// end 2 cases 
    
       
    
    } // end of boxit function 
    

//below are functions for drawing lines 

function drawLine (num) { 
    
    let line = " ";
    for (let i = 0; i <= num; i++) { 
        line = line + "━";
    
   
    }
    return line; 
    }


function drawTopLine (num) { 
    
    let line = "┏";
    for (let i = 0; i <= num; i++) { 
        line = line + "━";
    
   
    }
    return line + "┓"; 
    }



function drawMidLine (num) { 
    
    let line = "┣";
    for (let i = 0; i <= num; i++) { 
        line = line + "━";
    
   
    }
    return line + "┫"; 
    }



function drawBottomLine (num) { 
    
    let line = "┗";
    for (let i = 0; i <= num; i++) { 
        line = line + "━";
    
   
    }
    return line + "┛"; 
    }


//function  to find the longest word in the array
function findMaxCharLength (array) { 
   
    let longestString = "";
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > longestString.length) { 
    
            longestString = array[i];
            // console.log(longestString);
        
        }
        
    
    }
    return longestString;
}



function drawsAround (string) { 

    nameLength =  string.length;
    addBlanks = longestName.length - nameLength;
    return "┃" + string + ' '.repeat(addBlanks) + " ┃";

}

//run the different functions
findMaxCharLength (arrayTest);
boxIt(args);
