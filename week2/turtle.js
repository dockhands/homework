
// Welcome to Harry's incredible journey! 

// Send Harry across the magical lands of Vanderleer! 
// Below the Turtle Class, please make your own coordinates to move Harry... 
// e.g. forward(5) --> move Harry 5 units forward
// e.g. left() --> turn Harry left.

// Enjoy! 


console.log("==========================================================")
console.log("Printing Harry's journey!");
console.log("==========================================================")


// Create Turtle class
//functoins: 
// - forward()              = move Harry forward
// - right()                = turn Harry right
// - left()                 = turn Harry left
// - getMaxCoordinate()     = determine largest coordinate number
// - print()                = print Harry's journey
// - allPoints()            = list the coordinates in an array

class Turtle {
    constructor(posX, posY) {
        this.posX = posX;
        this.posY = posY;
        //set direction default to EAST
        this.direction = "east";
        //array holding all the turtle coordinates
        this.turtleCoordinates = [];
        //populate array with 2D
        this.turtleCoordinates[0] = [this.posX, this.posY];
        console.log(`Harry's starting off @ position X = ${this.posX} and position Y = ${this.posY} `);
    }
    //forward fn, takes number to tell it how many steps to take
    forward(n) {

        // push each step into turtleCoord array, using for loop,
        // forward direction depends on direction - so check direction first.
        for (let i = 1; i <= n; i++) {
            if (this.direction === "east") {
                this.posX = this.posX + 1;
                this.turtleCoordinates.push([this.posX, this.posY]);
            } else if (this.direction === "west") {
                this.posX = this.posX - 1;
                this.turtleCoordinates.push([this.posX, this.posY]);
            } else if (this.direction === "south") {
                this.posY = this.posY + 1;
                this.turtleCoordinates.push([this.posX, this.posY]);
            } else if (this.direction === "north") {
                this.posY = this.posY - 1;
                this.turtleCoordinates.push([this.posX, this.posY]);
            }
        }
        return this;
    }// end of forward

    // function to turn right - ie switch direction
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
        return this;
    }//end of right()

    // function to turn left - ie switch direction
    left() {

        if (this.direction === "east") {
            this.direction = "north"
        } else if (this.direction === "south") {
            this.direction = "east"
        } else if (this.direction === "west") {
            this.direction = "south"
        } else if (this.direction === "north") {
            this.direction = "west"
        }
        return this;

    }//end of left()

    // create function to find the maximum value a coordinate will be. We will use this val to determine the size of the grid
    getMaxCoordinate() {

        let turtleCoords = this.turtleCoordinates;
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
        //set the table size

        return bigNum
    }

    //function to print coordinates and route
    print() {
        let bigNum = this.getMaxCoordinate();
        let row = bigNum;
        let col = bigNum;
       
        // mapping coordinates
        let grid = "";
        for (let indexY = 0; indexY <= col; indexY++) {
            for (let indexX = 0; indexX <= row; indexX++) {
                let result = "□";
                //console.log("this was indexX and indeindexXY : " + indexX + " and " + indeindexXY)
                //if indX and ind Y = the coordinate, print the current position of indexX,indxY
                for (let z = 0; z < this.turtleCoordinates.length; z++) {
                    //print out the places it matched.
                    // console.log("this was our hit: " + this.turtleCoordinates[z][0] + " and " + this.turtleCoordinates[z][1]);
                    if (indexX === this.turtleCoordinates[z][0] && indexY === this.turtleCoordinates[z][1]) {
                        result = "■";
                    }
                }   // 3rd nested loop
                grid = grid + result;
            } // after row
            grid = grid + "\n";
        }// after col
        console.log(grid);
        console.log(`Harry's ending @ position X = ${this.posX} and position Y = ${this.posY} `);
    }

    // function to print out all the coordinates turtle has been
    allPoints() {

        console.log(this.turtleCoordinates);
    }


} // end of Turtle Class 

//declare turtle, Harry
let harry = new Turtle(3, 3);

// move Harry using example command
harry.forward(3).right().forward(3).forward(2).forward(3).left().forward(4).right().forward(6).left().forward(4).left().forward(3).left().forward(4).left().forward(3);

//print out all of Harry's points
harry.print();

// used to print out all the points 
// harry.allPoints();
