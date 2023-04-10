const formSign=document.getElementById("formSign");
let checkArr=[]
checkPassword=[]
formSign.addEventListener("submit",handelSubmitSign)
function handelSubmitSign(e){
    e.preventDefault();
    const userSign=
     {
     passWord:e.target.passSign.value,
    email:e.target.emailSign.value,
  
    }
    let infoArr=JSON.parse(localStorage.userInfo)
    console.log(infoArr)
    for (let i = 0; i < infoArr.length; i++) {
        const element = infoArr[i].email;
        const pass=infoArr[i].passWord;
        const user= infoArr[i].user
        console.log(user,pass,element)
        console.log(element)
        if(element===userSign.email){
      checkArr.push(userSign.email,pass,user)
        }
        
    }
    console.log(checkArr)
    
    if(!checkArr.includes(userSign.email)){
        alert(`seems like you dont have account ,sign up now`)
    }
    if(checkArr.includes(userSign.email)&&checkArr[1]!==userSign.passWord){
        alert("wrong password")
    }
    if(checkArr.includes(userSign.email)&&checkArr[1]==userSign.passWord){

        alert(`welcome ${checkArr[2]} `)    
        location.replace("./welcome.html")
    }
        }


        
    
   


