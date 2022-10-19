import navabar from "../components/navbar.js";
document.querySelector("#navbar").innerHTML = navabar();
let std_data = JSON.parse(localStorage.getItem("std")) || [];
class Signuplogin {
  #password;
  constructor(name) {
    this.name = name;
    this.email;
    this.#password;
  }

  emialis(email) {
    this.emial = email;
  }
  passwordis(passw) {
    this.#password = passw;
  }
}

class admin extends Signuplogin {
  constructor(name, id, std_data) {
    super(name, id, std_data);

    this.id = id;
    this.std_data = std_data;
  }

  emialis(email) {
    this.emial = email;
  }
  passwordis(passw) {
    this.password = passw;
  }
  logindata(loginemail, pas) {
    if (this.emial == loginemail && this.password == pas) {
      console.log("sucss");
    } else {
      alert("wrong Pass");
      return;
    }
  }
  addstd(nam, Id, url) {
    let obj1 = new constr(nam, Id, url);

    this.std_data.push(obj1);
    localStorage.setItem("std", JSON.stringify(this.std_data));
    window.location.reload();
  }

  removestd(stdid) {
    let arr = this.std_data;
    arr.forEach(function (elem, index) {
      //
      if (elem.stdent_id == stdid) {
        arr.splice(index, 1);
        localStorage.setItem("std", JSON.stringify(arr));
        window.location.reload();
      }
    });
  }
}
let arr = std_data;
function appenfunc() {
  let divmain = document.querySelector("#grid");
  divmain.innerHTML = null;
  arr.forEach((elem) => {
    let div1 = document.createElement("div");
    let image = document.createElement("img");
    image.src = elem.stdent_img;
    let nameis = document.createElement("h1");
    nameis.innerText = `Name: ${elem.stdent_name}`;
    let id = document.createElement("h1");
    id.innerText = `Student_ID: ${elem.stdent_id}`;
    div1.append(image, nameis, id);
    divmain.append(div1);
  });
}
appenfunc();
// let x = new Signuplogin();

let adm = new admin("nrupul", "admin_1", std_data);
// adm.nameis("aamir");
adm.emialis("aamirkhan@gmail123");
adm.passwordis(1234);
adm.logindata("aamirkhan@gmail123", 1234);

console.log(adm);
let f = document.querySelector("#forms");

f.addEventListener("submit", function () {
  event.preventDefault();

  let names = document.querySelector(".names").value;
  let idd = document.querySelector(".idd").value;
  let imgg = document.querySelector(".imgg").value;
  if (names == "" || imgg == "" || idd == "") {
    alert("Please fill all Data");
  } else {
    console.log("asdjhbs");
    adm.addstd(names, idd, imgg);
    document.querySelector(".names").value = "";
    document.querySelector(".idd").value = "";
    document.querySelector(".imgg").value = "";
  }
});

// let addfunction = () => {};
// adm.addstd(
//   "aamir",
//   "fw18_1184",
//   "https://www.alhaimission.in/images/demo-user.png"
// );
let ff = document.querySelector("#form2");

ff.addEventListener("submit", function () {
  event.preventDefault();

  let idd = document.querySelector(".iddd").value;
  if (idd == "") {
    alert("Please Enter The Student-ID");
  } else {
    console.log("asdjhbs");
    adm.removestd(idd);

    document.querySelector(".iddd").value = "";
  }
});

console.log(adm);
function constr(a, b, c) {
  this.stdent_name = a;
  this.stdent_id = b;
  this.stdent_img = c;
}
