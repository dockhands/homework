
// create Turtle class
class Turtle {
    constructor(posX, posY) {
        this.posX = posX;
        this.posY = posY;
        this.direction = "east";
        console.log("==================")
        console.log("posX in constructor " + posX);
        console.log("posY in constructor " + posY);



    }

    forward(n) {
        console.log(" current direction " + this.direction);

        if (this.direction === "east") {
            this.posX = this.posX + n;
        } else if (this.direction === "west") {
            this.posX = this.posX - n;
        } else if (this.direction === "south") {
            this.posY = this.posY + n;
        } else if (this.direction === "north") {
            this.posY = this.posY - n;
        }
    

    }
    right() {

        if (this.direction === "east") {
            this.direction = "south"
        } else if (this.direction === "south") {
            this.direction = "west"
        } else if (this.direction === "west") {
            this.direction = "north"
        } else if (this.direction === "north") {
            this.direction = "east"
        }

    }//end of right()

    left() {

        if (this.direction === "east") {
            this.direction = "north"
        } else if (this.direction === "south") {
            this.direction = "east"
        }
        else if (this.direction === "west") {
            this.direction = "south"
        }
        else if (this.direction === "north") {
            this.direction = "west"
        }

    }//end of left()


    getMax() { 

        let turtleCoords = this.turtleArr;

        //find the largest coordinate number turtle -- so we know how big to make map
        function largestCoordinate(arr) {
            let largest = 0,
                largestNum = [];

            for (var i = 0; i < arr.length; i++) {
                for (var j = 0; j < arr[i].length; j++) {
                    if (arr[i][j] > largest) {
                        largest = arr[i][j];
                        largestNum = arr[i];
                    }
                }
            }
            return largestNum;
        }
        let biggestNumber = largestCoordinate(turtleCoords);
       

       let bigNum = Math.max(...biggestNumber);
       return bigNum 
    }

    allPoints() {

    } 


} // end of Turtle Class 

//let harry = new Turtle(0, 0);


//console.log(harry.posX);

//new Turtle(2, 3).forward(3);

let harry = new Turtle(0, 0);

harry.forward(1);
harry.right();
harry.forward(2);
harry.left();
harry.forward(3);
harry.right();
harry.forward(2);
harry.left();
harry.forward(3);
harry.left();
harry.forward(3);
harry.left();
harry.forward(3);
//harry.forward(3).right().forward(3);

harry.allPoints();







// 1,1    1,2     1,3,     1,4      1,5
// 2,1    2,2     2,3,     2,4      2,5
//
//