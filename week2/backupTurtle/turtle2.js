
// create Turtle class
class Turtle {
    constructor(posX, posY) {
      this.posX = posX;
      this.posY = posY;
    }


    

    drawTable (num, posX, posY) { 
        console.log('are we calling forward?');

        
        console.log("you called turtle");
        console.log("This is position of X + forward ? " +  posX);
       // let table = new [[]];
        
       let startingXY =[0][0];

    //    startingXY[0][3] = X=0 and Y = 3,
    //    startingXY[2][1] = X = 2, Y = 1
       
     
        
        for (let x = 0; x <= num; x++) { 
         for (let y = 0; y <= num; y++) { 
           
            startingXY.push([x][y]);
         }

        }
          //if posX and Y = the coordinate, print the current position of X,Y
        // if (i+1 === posX && j+1 === posY ) {
        //     xMov = xMov + "*";
        // }
        // else { 
        //     xMov = xMov+ "-";
        // }
        // }

        //   xMov = xMov + "\n";
        //      }

             console.log(startingXY);
    return startingXY;
    }
   

    //  matrix( rows, cols, defaultValue){

    //     let arr = [];
      
    //     // Creates all lines:
    //     for(let i=0; i < rows; i++){
      
    //         // Creates an empty line
    //         arr.push([]);
      
    //         // Adds cols to the empty line:
    //         arr[i].push( new Array(cols));
      
    //         for(let j=0; j < cols; j++){
    //           // Initializes:
    //           arr[i][j] = defaultValue;
    //         }
    //     }
      
    //   return arr;
    //   }
        //Method: move right 
        forward (n) { 

            console.log('are we calling forward?');
        this.posX = posX+n;
            return drawTable(posX, posY);
        }



}

let harry = new Turtle(0,0);

harry.drawTable(5, 2, 3);
//console.log( harry.matrix(5, 5, 5));

console.log(harry.posX);  

//harry.drawTable(5, 2,3).forward(3);
//startingXY.forward(3)






// 1,1    1,2     1,3,     1,4      1,5
// 2,1    2,2     2,3,     2,4      2,5
//
//