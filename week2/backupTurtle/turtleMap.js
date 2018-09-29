

// let row = 5;
// let col = 5;
// let coords = [[1, 2], [1, 1], [0, 0], [5, 5], [4, 4], [2, 3], [3, 4], [1, 3]];
// let star = "";
// for (let y = 0; y <= col; y++) {
//     for (let x = 0; x <= row; x++) {

//         console.log("this was x and y : " + x + " and " + y)
//         //if posX and Y = the coordinate, print the current position of X,Y
//         // for(let z = 0; )
//         if (x === coords[x][0] && y === coords[y][1]) {
//             star = star + "*";

//             console.log("this was our hit: " + coords[x][0] + " and " + coords[y][1])
//         }
//         else {
//             star = star + "-";
//         }

//     }


//     star = star + "\n";
// }

// console.log(star);

// console.log(coords[0][0]);




// //===========


let row = 5;
let col = 5;
let coords = [[1, 2], [1, 1], [0, 0], [5, 5], [4, 4], [2, 3], [3, 4], [1, 3]];
let star = "";
for (let y = 0; y <= col; y++) {
    for (let x = 0; x <= row; x++) {

        console.log("this was x and y : " + x + " and " + y)
        //if posX and Y = the coordinate, print the current position of X,Y
        for (let z = 0; z <= 5; z++) {
            
            
            if (x === coords[z][0] && y === coords[z][1]) {
                star = star + "■";

                console.log("this was our hit: " + coords[x][0] + " and " + coords[y][1])
            }
            else {
                star = star + "□";
            }

        }   // coord loop
    }


    star = star + "\n";
}

console.log(star);

console.log(coords[0][0]);

// let row = 10;
// let col  = 10;
// let coords = [[3,3], [1,1], [2,2], [2,3], [5,5]]; 
// let star = "";
// for (let y = 0; y <= col; y++) { 
//     for (let x = 0; x <= row; x++) { 

//         console.log("this was x and y : "+ x+ " and " + y )
//      //if posX and Y = the coordinate, print the current position of X,Y
//     // for(let z = 0; )
//      if (x=== coords[x][0] && y === coords[y][1]) {
//        star = star + "*";

//        console.log("this was our hit: "+ coords[x][0]+ " and " + coords[y][1] )
//    }
//    else { 
//        star = star+ "-";
//    }

//    }


//    star = star + "\n";
//      }

//      console.log(star);

//      console.log(coords[0][0]);



// let bar = "";
// for (let y = 0; y <= col; y++) { 
//     for (let x = 0; x <= row; x++) { 

//         console.log("this was x and y : "+ x+ " and " + y )


//        bar = bar + "*";

//    }




//    bar = bar + "\n";
// }

//      console.log(bar);

//      console.log(coords[0][0]);
