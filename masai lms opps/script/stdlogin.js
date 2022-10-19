let loginform = document.querySelector("#loginform");
let learner=JSON.parse(localStorage.getItem("learner"))
loginform.addEventListener("submit", function () {
  event.preventDefault();
  if (loginform.email.value == "" || loginform.pass.value == "") {
    alert("please fill all the fields");
  } else if(loginform.email.value!=learner.email||loginform.pass.value!=learner.password){
    alert("password or email doesn't exist")
  }
  
  else {
    alert("login successful");
    window.location.href = "stdlec.html";
  }
});



 