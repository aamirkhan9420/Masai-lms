let loginform = document.querySelector("#loginform");
let adm=JSON.parse(localStorage.getItem("adm"))
loginform.addEventListener("submit", function () {
  event.preventDefault();

  console.log(loginform.email.value)
  if (loginform.email.value == "" || loginform.pass.value == "") {
    alert("please fill all the fields");
  }else if(loginform.email.value!=adm.email||loginform.pass.value!=adm.password){
    alert("password or email doesn't exist")
  }
   else {
    alert("login successful");
    window.location.href = "user.html";
  }
});
