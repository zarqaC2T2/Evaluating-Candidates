let arrData = [] // all the questions will be pushed here
let numberOfPassedQuestions = 0; // number of passed questions
let index0 = 1;
localStorage.clear();

class Questions {  // class to clone the questions
    constructor(Question, option1, option2, option3, option4, answer) { // constructor with question options and result
        this.Q = Question   // question  method
        this.A = option1     // option A method
        this.B = option2     // option B method
        this.C = option3     // option C method
        this.D = option4     // option D method
        this.Answer = null    // answer method
        this.Answersymbol = answer // answer symbol method
        this.userAnswer = null     // user answer method
        this.userAnswersymbol = null  // user answer symbol method
    }

    CheckAnswer(userAnswerSymbol) { // check answer 
        // arrData.push(Q) // push the question to the array
        this.userAnswersymbol = userAnswerSymbol // update the user answer symbol method
        switch (userAnswerSymbol) {   // switch statment to convert the  symbol  to a full user answer

            case "A":
                this.userAnswer = this.A
                break;
            case "B":
                this.userAnswer = this.B
                break;
            case "C":
                this.userAnswer = this.C
                break;
            case "D":
                this.userAnswer = this.D
                break;
        }

        switch (this.Answersymbol) { // switch statment to convert the  symbol  to a full answer

            case "A":
                this.Answer = this.A

                break;
            case "B":
                this.Answer = this.B
                break;
            case "C":
                this.Answer = this.C
                break;
            case "D":
                this.Answersymbol = this.D
                break;
        }


        if (userAnswerSymbol == this.Answersymbol) {

            return true
        }
        return false
    }

}

// Question number 1
let Q1 = new Questions(
    "Q1: What does 'DOM' stand for in JavaScript?",
    "A: Dynamic Object Method",
    "B: Data Object Module",
    "C: Document Object Model",
    "D: Document Orientation Model",
    "C"
);
arrData.push(Q1)


let Q2 = new Questions(
    "Q2: Which keyword is used to declare a variable in JavaScript?",
    "A: All of the above",
    "B: var",
    "C: let",
    "D: const",
    "A"
);
arrData.push(Q2)


let Q3 = new Questions(
    "Q3: What is the purpose of the 'typeof' operator in JavaScript?",
    "A: To check if a variable is null",
    "B: To determine the data type of a variable",
    "C: To check if a variable is undefined",
    "D: To compare two variables",
    "B"
);
arrData.push(Q3)

let Q4 = new Questions(
    "Q3: What is the difference between " == " and " === " in JavaScript?",
    "A: They are identical and can be used interchangeably",
    "B: " == " compares the value of two variables, while " === " compares both the value and the data type",
    "C: " === " compares the value of two variables, while " == " compares both the value and the data type",
    "D: None of the above",
    "B"
);
arrData.push(Q4)

let Q5 = new Questions(
    "Q3: What is the purpose of a 'callback function' in JavaScript?",
    "A: To execute a function immediately",
    "B: To pass a function as an argument to another function",
    "C: To return a value from a function",
    "D: To declare a new function",
    "B"
);
arrData.push(Q5)


// hide show results buttons
let showResultsButton = document.getElementById("ShowResultsButton");
showResultsButton.style.display = "none";



// the first question be rendered here 
let questionButtons = document.querySelectorAll(".questionsButtons button");
render(0);
questionButtons[0].style.background = "rgba(71, 200, 236, 0.272)";
questionButtons[0].disabled = true
// addEventListener to all question Buttons 
for (let i = 1; i < questionButtons.length; i++) {
    questionButtons[i].addEventListener("click", function () {
        // function to render the next question if there is an answer
        QbuttonF(i)
    })
}

// addEventListener to next question Button
let ShowNextquestion = document.getElementById("ShowNextquestion");
ShowNextquestion.addEventListener("click", function () {
    // function to check if there is an answer
    QbuttonF(index0)
});

// function to check if there is an answer
function QbuttonF(i) {
    if (arrData[i - 1].userAnswer == null) {
        alert("please choose an answer")
    } else {
        index0 += 1;
        if (i + 1 == questionButtons.length) {
            showResultsButton.style.display = "inline-block";
            ShowNextquestion.style.display = "none";
        } else {
            showResultsButton.style.display = "none";
        }
        let body0 = document.getElementById("tbody");
        removeChilds(body0);
        render(i)
        questionButtons[i].disabled = true;
        questionButtons[i].style.background = "rgba(71, 200, 236, 0.272)";
    }
}





// function to render the next question
function render(i) {
    let body = document.getElementById("tbody");
    let trQ = document.createElement("tr");
    body.appendChild(trQ)
    let thQ = document.createElement("th");
    thQ.textContent = arrData[i].Q;
    trQ.appendChild(thQ)
    trQ.classList.add("question")

    let trO1 = document.createElement("tr");
    trO1.addEventListener("click", function () { // click on option A to update 
        trO1.style.background = "rgba(71, 200, 236, 0.272)";
        trO2.style.background = "none";
        trO3.style.background = "none";
        trO4.style.background = "none";
        clickedOption("A", i) // function to update the user answer and save it in the local storage
    })
    trO1.classList.add("option");
    body.appendChild(trO1)
    let thO1 = document.createElement("th");
    thO1.textContent = arrData[i].A;
    trO1.appendChild(thO1);


    let trO2 = document.createElement("tr");
    trO2.addEventListener("click", function () { // click on option B to update
        trO1.style.background = "none";
        trO2.style.background = "rgba(71, 200, 236, 0.272)";
        trO3.style.background = "none";
        trO4.style.background = "none";
        clickedOption("B", i) // function to update the user answer and save it in the local storage

    })
    trO2.classList.add("option")
    body.appendChild(trO2)
    let thO2 = document.createElement("th");
    thO2.textContent = arrData[i].B;
    trO2.appendChild(thO2)


    let trO3 = document.createElement("tr");
    trO3.addEventListener("click", function () { // click on option C to update
        trO1.style.background = "none";
        trO2.style.background = "none";
        trO3.style.background = "rgba(71, 200, 236, 0.272)";
        trO4.style.background = "none";
        clickedOption("C", i) // function to update the user answer and save it in the local storage

    })
    trO3.classList.add("option")
    body.appendChild(trO3)
    let thO3 = document.createElement("th");
    thO3.textContent = arrData[i].C;
    trO3.appendChild(thO3);


    let trO4 = document.createElement("tr");
    trO4.addEventListener("click", function () { // click on option C to update
        trO1.style.background = "none";
        trO2.style.background = "none";
        trO3.style.background = "none";
        trO4.style.background = "rgba(71, 200, 236, 0.272)";
        clickedOption("D", i) // function to update the user answer and save it in the local storage

    })
    trO4.classList.add("option")
    body.appendChild(trO4)
    let thO4 = document.createElement("th");
    thO4.textContent = arrData[i].D;
    trO4.appendChild(thO4);


}



// function to update the user answer and save it in the local storage
function clickedOption(userAnswersymbol, i) {
    arrData[i].CheckAnswer(userAnswersymbol);
    localStorage.setItem('arrData', JSON.stringify(arrData));
    console.log(arrData[i].userAnswer)
}




// remove all child nodes
const removeChilds = (body) => {
    while (body.lastChild) {
        body.removeChild(body.lastChild);
    }
};




showResultsButton.addEventListener("click", function () {
    CheckAnswerButton();
    if (numberOfPassedQuestions > arrData.length / 2) {
        location.replace("./pass.html")
    } else {
        location.replace("./failed.html")

    }


})

function CheckAnswerButton() {
    for (let i = 0; i < arrData.length; i++) {
        if (arrData[i].userAnswersymbol == arrData[i].Answersymbol) {
            numberOfPassedQuestions += 1;
        }
    }
    localStorage.setItem('NPQ', JSON.stringify(numberOfPassedQuestions));
}
let count = 60;
let timeLeft = document.getElementsByClassName("time-left")[0];
const timerDisplay = () => {
    countdown = setInterval(() => {
        count--;
        timeLeft.innerHTML = `${count}s`;
        if (count == 0) {
            clearInterval(countdown);
            displayNext(ShowNextquestion);
        }
    }, 1000);
};

timerDisplay()

function displayNext() {
    CheckAnswerButton();
    if (numberOfPassedQuestions > arrData.length / 2) {
        location.replace("./pass.html")
    } else {
        location.replace("./failed.html")

    }

};