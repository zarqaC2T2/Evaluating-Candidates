let arrData =[] // all the questions will be pushed here
let numberOfPassedQuestions=0; // number of passed questions
let questionButtons =document.querySelectorAll(".questionsButtons button")
let arrDataTime=JSON.parse(localStorage.arrDataTime);
console.log(questionButtons[0].disabled = true)
if(localStorage.arrData != null && localStorage.NPQ != null){
    arrData=JSON.parse(localStorage.arrData)  
    numberOfPassedQuestions=JSON.parse(localStorage.NPQ) 
    // let body=document.getElementById("tbody");
    // removeChilds(body);
    //  resultstext.textContent=`number of correct answers = ${numberOfPassedQuestions}/${arrData.length}`
     disablebuttons()
     render0()

     // let user = JSON.parse(localStorage.userSign[0])
    //  if(user.html==true){

    //  }else if(user.css==true){

    //  }else {


    // }

     }




    function disablebuttons(){
        for(let i=0; i<questionButtons.length; i++){
            questionButtons[i].disabled = true;
            if(arrData[i].userAnswersymbol == arrData[i].Answersymbol){
                questionButtons[i].style.background="#64FF6A";
            }else{
                questionButtons[i].style.background="#F67373"; 
            }
        }
        }



function render0(){
    for(let i=0;i<arrData.length;i++){

let body=document.getElementById("tbody");
// let head=document.getElementById("thead");
let trQT=document.createElement("tr");
body.appendChild(trQT);
let thQT=document.createElement("th");
trQT.appendChild(thQT);
let pQT=document.createElement("p");
pQT.textContent=`Q${i+1} of ${arrData.length}`
thQT.appendChild(pQT);
let thQT2=document.createElement("th");
let divQT=document.createElement("div");
trQT.appendChild(thQT2);
thQT2.appendChild(divQT);
divQT.classList.add("timer-div");
thQT2.appendChild(divQT);
let imgQT=document.createElement("img");
imgQT.src="https://uxwing.com/wp-content/themes/uxwing/download/time-and-date/stopwatch-icon.png";
imgQT.style.width="1.5rem";
let spanQT=document.createElement("span");
spanQT.innerHTML=`${60-arrDataTime[i]} s`;
spanQT.classList.add("time-left");

divQT.appendChild(imgQT);
divQT.appendChild(spanQT);



      
        let trQ=document.createElement("tr");
        trQ.classList.add("question")
        body.appendChild(trQ)
        let thQ=document.createElement("th");
        thQ.textContent=arrData[i].Q;
        trQ.appendChild(thQ)


        let trO1=document.createElement("tr");
        trO1.classList.add("option");
        body.appendChild(trO1)
        let thO1=document.createElement("th");
        thO1.textContent=arrData[i].A;
        trO1.appendChild(thO1);

            if(arrData[i].Answersymbol=="A"){
            trO1.classList.add("answer");
            let th_O1_Img=document.createElement("th");
            let iamge=document.createElement("img");
            iamge.src="imagesMajdi/true.png"
            th_O1_Img.appendChild(iamge)
            trO1.appendChild(th_O1_Img)
            }
            else if(arrData[i].userAnswersymbol =="A" && arrData[i].Answersymbol!="A" ){
                trO1.classList.add("Wanswer");
                let th_O1_Img=document.createElement("th");
                let iamge=document.createElement("img");
                iamge.src="imagesMajdi/false.png"
                th_O1_Img.appendChild(iamge)
                trO1.appendChild(th_O1_Img)
            }


        let trO2=document.createElement("tr");
        trO2.classList.add("option")
        body.appendChild(trO2)
        let thO2=document.createElement("th");
        thO2.textContent=arrData[i].B;
        trO2.appendChild(thO2)

            if(arrData[i].Answersymbol=="B"){
            trO2.classList.add("answer");
            let th_O2_Img=document.createElement("th");
            let iamge=document.createElement("img");
            iamge.src="imagesMajdi/true.png"
            th_O2_Img.appendChild(iamge)
            trO2.appendChild(th_O2_Img)
            }
            else if(arrData[i].userAnswersymbol =="B" && arrData[i].Answersymbol!="B" ){
                trO2.classList.add("Wanswer");
                let th_O2_Img=document.createElement("th");
                let iamge=document.createElement("img");
                iamge.src="imagesMajdi/false.png"
                th_O2_Img.appendChild(iamge)
                trO2.appendChild(th_O2_Img)
            }

        let trO3=document.createElement("tr");
        trO3.classList.add("option")
        body.appendChild(trO3)
        let thO3=document.createElement("th");
        thO3.textContent=arrData[i].C;
        trO3.appendChild(thO3);

            if(arrData[i].Answersymbol=="C"){
            trO3.classList.add("answer");
            let th_O3_Img=document.createElement("th");
            let iamge=document.createElement("img");
            iamge.src="imagesMajdi/true.png"
            th_O3_Img.appendChild(iamge)
            trO3.appendChild(th_O3_Img)
            }
            else if(arrData[i].userAnswersymbol =="C" && arrData[i].Answersymbol!="C" ){
                trO3.classList.add("Wanswer");
                let th_O3_Img=document.createElement("th");
                let iamge=document.createElement("img");
                iamge.src="imagesMajdi/false.png"
                th_O3_Img.appendChild(iamge)
                trO3.appendChild(th_O3_Img)
            }

        let trO4=document.createElement("tr");
        trO4.classList.add("option")
        body.appendChild(trO4)
        let thO4=document.createElement("th");
        thO4.textContent=arrData[i].D;
        trO4.appendChild(thO4);

            if(arrData[i].Answersymbol=="D"){
            trO4.classList.add("answer");
            let th_O4_Img=document.createElement("th");
            let iamge=document.createElement("img");
            iamge.src="imagesMajdi/true.png"
            th_O4_Img.appendChild(iamge)
            trO4.appendChild(th_O4_Img)
            }
            else if(arrData[i].userAnswersymbol =="D" && arrData[i].Answersymbol!="D" ){
                trO4.classList.add("Wanswer");
                let th_O4_Img=document.createElement("th");
                let iamge=document.createElement("img");
                iamge.src="imagesMajdi/false.png"
                th_O4_Img.appendChild(iamge)
                trO4.appendChild(th_O4_Img)
            }

            let hr00=document.createElement("hr");
            hr00.style.border="1px solid black";
            hr00.style.marginBottom="1rem"
            body.appendChild(hr00)

    }

}