let ptitle = document.getElementById("ptitle")

if (localStorage.arrData != null && localStorage.NPQ != null) {
    arrData = JSON.parse(localStorage.arrData)
    numberOfPassedQuestions = JSON.parse(localStorage.NPQ)

    ptitle.textContent = ` Sorry you didn't pass the quiz, you can try again after 3 months, 
    number of correct answers = ${numberOfPassedQuestions}/${arrData.length}`
}