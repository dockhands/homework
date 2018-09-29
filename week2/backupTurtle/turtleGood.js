
// create Turtle class
class Turtle {
    constructor(posX, posY) {
        this.posX = posX;
        this.posY = posY;
        this.direction = "east";
        this.turtleArr = [];
        console.log("==================")
        console.log("posX in constructor " + posX);
        console.log("posY in constructor " + posY);


        // //let coordinates = [];
        // coordinates[0] = this.posX;
        // coordinates[1] = this.posY;
        // turtleArr[0] = coordinates; 
        // console.log("THIS IS TURTLE ARRAY START " + turtleArr);

        this.turtleArr[0] = [this.posX, this.posY];
        console.log("THIS IS TURTLE ARRAY START " + this.turtleArr);
    }

    forward(n) {
        console.log("===---------")
        console.log(" current direction " + this.direction);

        for (let i = 1; i <= n; i++) {
            if (this.direction === "east") {
                this.posX = this.posX + 1;
                this.turtleArr.push([this.posX, this.posY]);
            } else if (this.direction === "west") {
                this.posX = this.posX - 1;
                this.turtleArr.push([this.posX, this.posY]);
            } else if (this.direction === "south") {
                this.posY = this.posY + 1;
                this.turtleArr.push([this.posX, this.posY]);
            } else if (this.direction === "north") {
                this.posY = this.posY - 1;
                this.turtleArr.push([this.posX, this.posY]);
            }

        }

        console.log("should move forward by " + n + " so X is now " + this.posX);
        console.log("should move forward by " + n + " so Y is now " + this.posY);

        //this.turtleArr[1] = [this.posX, this.posY];
        console.log("THIS IS TURTLE ARRAY after FORWARD " + this.turtleArr);

        return this;
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
        return this;
    }//end of right()

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

    allPoints() {

        console.log(this.turtleArr);
    }


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
        //set the table size
       
      return bigNum 
    }

    print() {

        let bigNum = this.getMax(); 
        
        console.log("this is biggest number: " + bigNum)
        let row = bigNum;
        let col = bigNum;    
    // mapping coordinates
    let star = "";
        for (let y = 0; y <= col; y++) {
            for (let x = 0; x <= row; x++) {
        
                //console.log("this was x and y : " + x + " and " + y)
                //if posX and Y = the coordinate, print the current position of X,Y
                for (let z = 0; z <= 8; z++) {
            
                    if (x === this.turtleArr[z][0] && y === this.turtleArr[z][1]) {
                        star = star + "■";
        
                        console.log("this was our hit: " + this.turtleArr[x][0] + " and " + this.turtleArr[y][1])
                    }
                    else {
                        star = star + "□";
                    }
        
                }   // 3rd nested loop
            }
            star = star + "\n";
        }
        console.log(star);
    }
} // end of Turtle Class 


let harry = new Turtle(0, 0);


//harry.forward(3).right().forward(3).forward(2);
harry.forward(3).right().forward(3).forward(2).forward(3);


harry.allPoints();
harry.print();

let franklin = new Turtle(1, 1);










// 1,1    1,2     1,3,     1,4      1,5
// 2,1    2,2     2,3,     2,4      2,5
//
//