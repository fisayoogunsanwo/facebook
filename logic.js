
var closeSignup = document.querySelector("#close");
var newacc = document.querySelector("#b3");
var signupform = document.querySelector("#signupform");
var mainbox = document.querySelector("#mainbox");
var customButton = document.querySelector("#cus");
var customGender = document.querySelector("#customGender");


newacc.onclick = function (){
    mainbox.style.display= "static";
    signupform.style.display= "block";
}

closeSignup.onclick = function(){
    mainbox.style.display= "block";
    signupform.style.display= "none";
}
cus.onclick = ()=>{
    customGender.style.display= "block";
}




let email= document.getElementById("in1");
let password= document.getElementById("in2");
let login = document.getElementById("b1");
let emailError = document.getElementById("emailError");



login.onclick = function (){
    let inputEmail = email.value;
    let inputPassword= password.value; 
    let at = /@/.test(inputEmail);
    let num = /[0-9]/.test(inputPassword);
    let alpha = /[a-z]/i.test(inputPassword);
    let com = /[.]com/.test(inputEmail);
    console.log("the results: " + at + num + alpha + com);

   
    
   if(at== true && com== true && alpha == true && num == true){
        alert("You have successfully signed in!");
        }
        else if(at== false){
        alert("You have not entered a valid email address!");
        }
        else if(com== false){
        alert("You have not entered a valid email address, \".com\" missing!");
        }
        else if(alpha== false){
        alert("You have not entered a valid password, please add letters");
        }
        else if(num== false){
        alert("You have not entered a valid password, please add numbers");
        }

}


