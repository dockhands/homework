const readline = require('readline');

const todoInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Example messages 
let introMessage = "Welcome to ToDo CLI! \n   -------------------- \n";

console.log(introMessage);

let options =
  "(v) View • (n) New • (cX) Complete • (dX) Delete • (q) Quit \n ";

let toDoList = [["[ ]", "Take out the trash"], ["[ ]", "Buy toothpaste"], ["[ ]", "Buy Snickerdoodles"], ["[ ]", "Find a cure for aging"]];



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
      console.log("This is the cX item number:", cNumber);
      complete(cNumber);
      break;      

      case answer[0] == "d":
      let dNumber = parseInt(answer[1]);
      console.log("This is the dX item number:", dNumber);
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
  console.log(toDoList);
  console.log();
  mainMenu(options);
};

const add = function () {
  todoInterface.question("What do you want to add to the list? ", (toAdd) => {
    console.log(toAdd);
    //view(toAdd);
    toDoList.push(["[ ]", toAdd]);
    mainMenu(options);
  });
};

const complete = function (itemCompleted) {
  //update the box of index number's first index inside double array
  toDoList[itemCompleted - 1][0] = "[✓]";
  console.log(`Completed item: "${toDoList[itemCompleted - 1][1]}"`);
  mainMenu(options);
};

const toDelete = function (itemDeleted) {
  console.log(`Deleted item: "${toDoList[itemDeleted - 1][1]}"`);
  toDoList[itemDeleted - 1].splice(itemDeleted - 1, 1);
  mainMenu(options);
};

const quit = function () {
 
  console.log("See you soon! 👀");
  todoInterface.close();
  mainMenu(options);
};

