import navabar from "../components/navbar.js";
document.querySelector("#navbar").innerHTML = navabar();
let assignment_data = JSON.parse(localStorage.getItem("asgnmt")) || [];

class admin {
  constructor(name, id, assignment_data) {
    this.name = name;
    this.id = id;
    this.assignment_data = assignment_data;
  }

  addstd(teacher, topic, date, time, Assignment_ID, Assignment_Type) {
    let obj1 = new constr(
      teacher,
      topic,
      date,
      time,
      Assignment_ID,
      Assignment_Type
    );

    this.assignment_data.push(obj1);
    localStorage.setItem("asgnmt", JSON.stringify(this.assignment_data));
    window.location.reload();
  }

  removeassignment(a) {
    let arr = this.assignment_data;
    arr.forEach(function (elem, index) {
      if (elem.Assignment_ID == a) {
        arr.splice(index, 1);
        localStorage.setItem("asgnmt", JSON.stringify(arr));
        window.location.reload();
      }
    });
  }
}
let arr = assignment_data;
function appenfunc() {
  let divmain = document.querySelector("#grid2");
  divmain.innerHTML = null;
  arr.forEach((elem) => {
    let div1 = document.createElement("div");
    let topic = document.createElement("h1");
    topic.id = "assname";

    topic.innerText = elem.topic;
    let div2 = document.createElement("div");
    div2.id = "div_date_time";
    let teacher = document.createElement("h2");
    teacher.innerText = `${elem.teacher} Created Assignment Problem's`;
    let date = document.createElement("h2");
    date.innerText = elem.date;
    let time = document.createElement("h2");
    time.innerText = `${elem.time}`;
    let div3 = document.createElement("div");

    let Assignment_ID = document.createElement("h3");
    Assignment_ID.innerText = elem.Assignment_ID;
    div3.append(Assignment_ID);
    div3.id = "div3";
    div2.append(teacher, date, time);
    let div4 = document.createElement("div");
    div4.append(div2, div3);
    div4.id = "div4";
    let newdiv = document.createElement("div");
    newdiv.id = "newdiv";
    let astype = document.createElement("h2");
    astype.innerText = elem.Assignment_Type;
    if (elem.Assignment_Type == "OJ") {
      astype.style.backgroundColor = "#DB2777";
    } else {
      astype.style.backgroundColor = "#65A30D";
    }
    astype.id = "astype";
    newdiv.append(topic, astype);
    div1.append(newdiv, div4);
    divmain.append(div1);
  });
}
appenfunc();
let adm = new admin("nrupul", "admin_1", assignment_data);
console.log(adm);
let f = document.querySelector("#forms1");

f.addEventListener("submit", function () {
  event.preventDefault();

  let Topic = document.querySelector(".Topic").value;
  let date = document.querySelector(".date").value;
  let time = document.querySelector(".time").value;
  let teacher = document.querySelector(".teacher").value;
  let Assignment_ID = document.querySelector(".Assignment_ID").value;
  let Assignment_Type = document.querySelector(".form-select").value;

  if (
    Topic == "" ||
    time == "" ||
    date == "" ||
    teacher == "" ||
    Assignment_ID == "" ||
    Assignment_Type == ""
  ) {
    alert("Please fill all Data");
  } else {
    console.log("asdjhbs");
    adm.addstd(teacher, Topic, date, time, Assignment_ID, Assignment_Type);
    document.querySelector(".Topic").value = "";
    document.querySelector(".date").value = "";
    document.querySelector(".time").value = "";
    document.querySelector(".teacher").value = "";
    document.querySelector(".Assignment_ID").value = "";
    document.querySelector(".form-select").value = "";
  }
});

let ff = document.querySelector("#form3");

ff.addEventListener("submit", function () {
  event.preventDefault();

  let Assignment_ID = document.querySelector(".Assignment_IDD").value;
  if (Assignment_ID == "") {
    alert("Please Enter The Assignment_ID");
  } else {
    console.log("asdjhbs");
    adm.removeassignment(Assignment_ID);

    document.querySelector(".Assignment_IDD").value = "";
  }
});

console.log(adm);
function constr(d, a, b, c, e, f) {
  this.topic = a;
  this.date = b;
  this.time = c;
  this.teacher = d;
  this.Assignment_ID = e;
  this.Assignment_Type = f;
}
