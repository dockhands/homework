
// Global Variables
let magicWord = "stranger".toUpperCase().split("")
let numberOfWrongGuesses = 0;

// Use array of allLetters to keep track of winning 
let allLetters = magicWord; 

//  sfx 
const winningSound = () => new Audio(`sounds/win.wav`);
const losingSound = () => new Audio(`sounds/lose.wav`);


// 
document.querySelectorAll(".square").forEach(node => {

    node.addEventListener("click", event => { 
      const currentTarget = event.currentTarget;
      
      currentTarget.classList.toggle("selected");

//CORRECT GUESS
     if (magicWord.includes(currentTarget.id)){ 
         console.log("that was a letter!")


         switch(currentTarget.id) {

            case "S":
            console.log(allLetters)
            $("#letter_1 h1").css('visibility', 'visible');
           
            allLetters = allLetters.filter(function(e) { return e !== 'S' })
            console.log(allLetters)

            break;

            case "T":
            $("#letter_2 h1").css('visibility', 'visible');
            allLetters = allLetters.filter(function(e) { return e !== 'T' })

            break;
            case "R":
            $("#letter_3 h1").css('visibility', 'visible');
            $("#letter_8 h1").css('visibility', 'visible');
            allLetters = allLetters.filter(function(e) { return e !== 'R' })


            break;
            case "A":
            $("#letter_4 h1").css('visibility', 'visible');
            allLetters = allLetters.filter(function(e) { return e !== 'A' })

            break;

            case "N":
            $("#letter_5 h1").css('visibility', 'visible');
            allLetters = allLetters.filter(function(e) { return e !== 'N' })

            break;

            case "G":
            $("#letter_6 h1").css('visibility', 'visible');
            allLetters = allLetters.filter(function(e) { return e !== 'G' })

            break;

            case "E":
            $("#letter_7 h1").css('visibility', 'visible');
            allLetters = allLetters.filter(function(e) { return e !== 'E' })

            break;
            }

            if (allLetters.length == 0) { 
                setTimeout(function(){ alert("You guessed it!"); }, 500);
                winningSound().play();
            }

     }  
//WRONG GUESS
     else { 
        console.log("that was wrong letter!")

        numberOfWrongGuesses +=1;
        console.log("Wrong guesses is ",  numberOfWrongGuesses);

     }

     switch(numberOfWrongGuesses) {

        case 0:
        $("#gallows").css('background-image', 'url(' + "./images/gallows.jpg "+ ')');
             break;
        case 1:
        $("#gallows").css('background-image', 'url(' + "./images/gallows_1.jpg "+ ')');
            break;
        case 2:
        $("#gallows").css('background-image', 'url(' + "./images/gallows_2.jpg "+ ')');
            break;
        case 3:
        $("#gallows").css('background-image', 'url(' + "./images/gallows_3.jpg "+ ')');
            break;
        case 4:
        $("#gallows").css('background-image', 'url(' + "./images/gallows_4.jpg "+ ')');
            break;
        case 5:
        $("#gallows").css('background-image', 'url(' + "./images/gallows_5.jpg "+ ')');
            break;
        case 6:
        $("#gallows").css('background-image', 'url(' + "./images/gallows_6.jpg "+ ')');

        setTimeout(function(){ alert("Game over... play again? : ( "); }, 500);
        losingSound().play();
            break;
        }

    });
  });

