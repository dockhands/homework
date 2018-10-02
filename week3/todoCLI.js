const readline = require('readline');

const todoInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Example messages 
let introMessage = " \n--------------------\nWelcome to ToDo CLI! \n--------------------\n";

console.log(introMessage);

let options =
  "(v) View • (n) New • (cX) Complete • (dX) Delete • (q) Quit \n ";

let toDoList = [["[ ]", "Take out the trash"]];



const mainMenu = (q) => { 
todoInterface.question(options, (answer) => {
  // TODO: Log the answer in a database

  switch (true) {
    case answer == "v":
      view();
      break;
    
      case answer == "n": 
      add();
      break;
      
      case answer[0] == "c":
      let cNumber = parseInt(answer[1]);
      complete(cNumber);
      break;      

      case answer[0] == "d":
      let dNumber = parseInt(answer[1]);
      toDelete(dNumber);
      break;

      case answer == "q":
      quit();
  
    }

});
}

mainMenu(options);
// functions 

const view = function () {
  
 if (toDoList.length == 0) {
   console.log("List is empty...")
 }
 else { 
  for (let i = 0; i <= toDoList.length-1; i++) {
  console.log(i+ " " + toDoList[i].join(" "));
  }
}
  console.log();
  mainMenu(options);
};

const add = function () {
  todoInterface.question("What do you want to add to the list? ", (toAdd) => {
    console.log(toAdd);
    //view(toAdd);
    toDoList.push(["[ ]", toAdd]);
    console.log();
    mainMenu(options);
  });
};

const complete = function (itemCompleted) {
  //update the box of index number's first index inside double array
  toDoList[itemCompleted][0] = "[✓]";
  console.log(`Completed: "${toDoList[itemCompleted ][1]}"`);
  console.log();
  mainMenu(options);
};

const toDelete = function (itemDeleted) {
  
  console.log(`Deleted: "${toDoList[itemDeleted][1]}"`);
  toDoList.splice(itemDeleted, 1);
  console.log();
  mainMenu(options);
};

const quit = function () {
 
  console.log("See you soon! 👀");
  todoInterface.close();
  process.exit();
};

