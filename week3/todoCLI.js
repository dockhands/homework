const readline = require('readline');

const todoInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Example messages 

let introMessage = 
"Welcome to ToDo CLI! \n   -------------------- \n (v) View • (n) New • (cX) Complete • (dX) Delete • (q) Quit \n ";

let toDoList = [["[ ]","Take out the trash"], ["[ ]","Buy toothpaste"],["[ ]","Buy Snickerdoodles"],["[ ]","Find a cure for aging"]];

todoInterface.question(introMessage, (answer) => {
  // TODO: Log the answer in a database

  if (answer == "v"){
   view();
  }

  if (answer == "n"){
    add();
   }

   if (answer[0] == "c"){
    
    let itemNumber = parseInt(answer[1]);
    console.log("This is the cX item number:", itemNumber);
    complete(itemNumber);
   }


 // todoInterface.close();
});


// functions 

let view = function (itemToAdd) { 

  console.log(toDoList);
  toDoList.push("[ ] " +  itemToAdd);
  console.log(toDoList);
};

let add = function () { 

  todoInterface.question("What do you want to add to the list? ", (toAdd) => { 

    console.log(toAdd);
    view(toAdd);

  }); 

}; 

let complete = function (itemCompleted) { 

  //console.log(toDoList[1][0]);
  toDoList[itemCompleted-1][0] = "[✓]";
  console.log(`Completed item: "${toDoList[itemCompleted-1][1]}"`);
  //home(); 
};



