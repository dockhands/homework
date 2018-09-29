
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
       

    print () { 

        
    }

} // end of Turtle Class 


let harry = new Turtle(0, 0);


//harry.forward(3).right().forward(3).forward(2);
harry.forward(3).right().forward(3).forward(2);


harry.allPoints();

let franklin = new Turtle(1, 1); 










// 1,1    1,2     1,3,     1,4      1,5
// 2,1    2,2     2,3,     2,4      2,5
//
//