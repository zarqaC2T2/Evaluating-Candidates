
let infoArr = [];
let checkArr = [];

let userInput = document.getElementById('fname')
let userpass = document.getElementById('pword')
let userEmail = document.getElementById('email')
let userConfirm = document.getElementById('confirm')
let validation = document.getElementsByClassName("validRule")

let UserValidate = function (string) {
  let pattern = /\s/g;
  return !pattern.test(string)
}
let PassWordValidate = function (string) {
  let pattern = /(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/g;
  return pattern.test(string)
}
let emailValidate = function (string) {
  let pattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g;
  return pattern.test(string);
}


if (localStorage.userInfo != null) {
  infoArr = JSON.parse(localStorage.userInfo);
}

function User(user, passWord, email, position) {
  this.user = user;
  this.passWord = passWord;
  this.email = email;
  this.position = position;
  this.html = null,
    this.css = null,
    this.js = null
}


const form = document.getElementById("form")
form.addEventListener("submit", handelSubmit)
function handelSubmit(e) {
  e.preventDefault();

  let user =
  {
    user: e.target.user.value,
    passWord: e.target.password.value,
    confirm: e.target.confirm.value,
    email: e.target.email.value,
    position: e.target.position.value,
    html: null,
    css: null,
    js: null
  }

  let infoUser = new User(user.user, user.passWord, user.email, user.position, user.html, user.css, user.js);

  if (
    UserValidate(user.user) &&
    emailValidate(user.email) &&
    PassWordValidate(user.passWord) &&
    user.confirm == user.passWord
  ) {
    console.log(user.confirm);
    infoArr.push(infoUser)
    let infoToString = JSON.stringify(infoArr)
    localStorage.setItem("userInfo", infoToString)
    console.log(infoArr)
    checkArr = [];
    for (let i = 0; i < infoArr.length; i++) {

      const element = infoArr[i].email;
      checkArr.push(element)
    }

  } else {
    if (!UserValidate(user.user) ||
      !emailValidate(user.email) ||
      !PassWordValidate(user.passWord) ||
      user.confirm !== user.passWord) {
      userInput.style.border = ' solid red'
      userEmail.style.border = ' solid red'
      userpass.style.border = ' solid red'
      userConfirm.style.border = ' solid red'

      for (let i = 0; i < validation.length; i++) {

        validation[i].style.display = ' block'

      }
    }
  }
  console.log(checkArr)
  let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) !== index)
  console.log(findDuplicates(checkArr));
  if (findDuplicates(checkArr).length !== 0) {
    // alert("user Already exist")

    infoArr.pop();

  }
  if (findDuplicates(checkArr).length === 0 && UserValidate(user.user) &&
    emailValidate(user.email) &&
    PassWordValidate(user.passWord) &&
    user.confirm == user.passWord) {
    alert("welcome, now you have an account")
    // location.replace("../welcomepage/welcome.html")
  }

}


const button = document.getElementById("button-submit"); // select the button element
button.onclick = function () {
  window.location.href = "welcome.html"; // set the new path for the button
};




// localStorage.clear();

