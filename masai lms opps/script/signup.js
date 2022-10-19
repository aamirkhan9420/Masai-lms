class SignLog {
  constructor() {
    this.name;
    this.email;
    this.password;
  }
}
class admin extends SignLog {
  constructor() {
    super();
  }
  signup(name, email, pass, selectvalue) {
    this.name = name;
    this.email = email;
    this.password = pass;
    this.profesion = selectvalue;
  }
}

let sl = new SignLog();

let f = document.querySelector("#signupform");
f.addEventListener("submit", function () {
  event.preventDefault();

  let adm1 = new admin();
  if (
    signupform.name.value == "" ||
    signupform.email.value == "" ||
    signupform.pass.value == "" ||
    signupform.select.value == ""
  ) {
    alert("Please Fill all fields");
  } else {
    adm1.signup(
      signupform.name.value,
      signupform.email.value,
      signupform.pass.value,
      signupform.select.value
    );
    if (signupform.select.value == "Admin") {
      localStorage.setItem("adm",JSON.stringify(adm1))

      window.location.href = "login.html";
    } else {
      console.log(adm1)
      localStorage.setItem("learner",JSON.stringify(adm1))
      alert("Signup Successful");
      window.location.href = "stdlogin.html";
    }

    console.log(adm1);
    signupform.name.value = "";
    signupform.email.value = "";
    signupform.pass.value = "";
  }
});
