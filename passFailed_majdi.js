let ptitle=document.getElementById("ptitle")

if(localStorage.arrData != null && localStorage.NPQ != null){
    arrData=JSON.parse(localStorage.arrData)  
    numberOfPassedQuestions=JSON.parse(localStorage.NPQ) 
  
    ptitle.textContent= `number of correct answers = ${numberOfPassedQuestions}/${arrData.length}`
}