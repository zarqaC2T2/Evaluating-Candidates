let ptitle = document.getElementById("ptitle")

if (localStorage.arrData != null && localStorage.NPQ != null) {
    arrData = JSON.parse(localStorage.arrData)
    numberOfPassedQuestions = JSON.parse(localStorage.NPQ)

    ptitle.textContent = `Congratulations, you passed the quiz, now you are candidate for this position, we will contact you ASAP, 
    number of correct answers = ${numberOfPassedQuestions}/${arrData.length}`
}