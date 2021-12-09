
// generate two random numbers
let firstNumber = Math.floor(Math.random() * 10) ;
let secondNumber = Math.floor(Math.random() * 10) ;

//get the total
let answer = firstNumber * secondNumber;

//render the random numbers
let genNumber1 = document.getElementById("first-number");
    genNumber1.value = firstNumber;

let genNumber2 = document.getElementById("second-number");
    genNumber2.value = secondNumber;

//evaluate users guess 
let check = document.getElementById("check")

// set initial score
let score = 0 ;
let outOf = 0 ;

// runs the fucntion when they click the check button
check.addEventListener("click", function(){


    let guess = document.getElementById("answer").value ;
        guess = Number(guess);


        //if their answer is correct adds to their score and attemps and say Very nIce
    if (guess == answer){
        let correct = document.getElementById("message");
        let veryNice = document.getElementById("sound2");

        correct.innerText = "Correct";
        outOf++;
        veryNice.play();
        
        alert("Correct");
        window.location.reload();
        score++;
        
        localStorage.setItem("Your Score is: ", score);
        localStorage.setItem("Out Of: ", outOf);
        
        //if answer is incorrect only adds to the attemps and say you Stupid
    } else {
        let sound = document.getElementById("sound1");
        let incorrect = document.getElementById("message");

        outOf++;
        localStorage.setItem("Out Of: ", outOf);

        incorrect.innerText = "The answer was " + answer + "." ;
        
        sound.play()
        alert("Incorrect, The correct answer was " + answer + ".");
        window.location.reload()
    }
})

// get their attemps and score from local storage so it can increment every try
if(localStorage.getItem("Your Score is: ")>=0) {

    score = localStorage.getItem("Your Score is: ");
    outOf = localStorage.getItem("Out Of: ");
}

//renders the result from local storage to the page and gives them a percentage
function scoreCount(){
    document.getElementById("score").innerText = "Your Score is: " + localStorage.getItem("Your Score is: ")
    document.getElementById("outOf").innerText = "Out of: " + localStorage.getItem("Out Of: ")

    document.getElementById("percent").innerText = "That's: " + Math.floor(localStorage.getItem("Your Score is: ")/localStorage.getItem("Out Of: ")*100) + "%"
}

//calls the function
scoreCount()