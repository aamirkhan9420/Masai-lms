import navabar from "../components/navbar.js";
document.querySelector("#navbar").innerHTML = navabar();
let assignment_data = JSON.parse(localStorage.getItem("lecture")) || [];

class admin {
  constructor(name, id, assignment_data) {
    this.name = name;
    this.id = id;
    this.assignment_data = assignment_data;
  }
  addstd(teacher, topic, date, time, Lectures_ID, Lectures_Type) {
    let obj1 = new constr(
      teacher,
      topic,
      date,
      time,
      Lectures_ID,
      Lectures_Type
    );

    this.assignment_data.push(obj1);
    localStorage.setItem("lecture", JSON.stringify(this.assignment_data));
    window.location.reload();
  }

  removeassignment(a) {
    let arr = this.assignment_data;
    arr.forEach(function (elem, index) {
      if (elem.Lectures_ID == a) {
        arr.splice(index, 1);
        localStorage.setItem("lecture", JSON.stringify(arr));
        window.location.reload();
      } else {
        alert("Assignment Dose'not Exist On LMS");
      }
    });
  }
}
let arr = assignment_data;
function appenfunc() {
  console.log("aa")
  let divmain = document.querySelector("#grid2");
  divmain.innerHTML = null;
  arr.forEach((elem) => {
    let div1 = document.createElement("div");
    let divlive = document.createElement("div");
    divlive.id = "divlive";
    let topic = document.createElement("h4");
    topic.id = "lectname";
    let live = document.createElement("h1");

    live.innerText = elem.Lectures_Type;
    if (elem.Lectures_Type == "VIDEO") {
      live.style.backgroundColor = "#2563EB";
    } else {
      live.style.backgroundColor = "#16a34a";
    }
    live.id = "live";
    divlive.append(topic, live);
    topic.innerText = elem.topic;
    let div2 = document.createElement("div");
    div2.id = "div_date_time";
    let teacher = document.createElement("h2");
    teacher.innerText = `${elem.teacher} Scheduled General at`;
    let date = document.createElement("h2");
    date.innerText = elem.date;
    let time = document.createElement("h2");
    time.innerText = `-${elem.time}`;
    let div3 = document.createElement("div");

    let Lectures_ID = document.createElement("h3");
    Lectures_ID.innerText = elem.Lectures_ID;
    div3.append(Lectures_ID);
    div3.id = "div3_lec_id";
    div2.append(teacher, date, time);
    let div4 = document.createElement("div");
    div4.append(div2, div3);
    div4.id = "div4";
    div1.append(divlive, div4);
    divmain.append(div1);
  });
}
appenfunc();
let adm = new admin("nrupul", "admin_1", assignment_data);
console.log(adm);
let f = document.querySelector("#forms5");

f.addEventListener("submit", function () {
  event.preventDefault();

  let Topic = document.querySelector(".Topic").value;
  let date = document.querySelector(".Lectures_date").value;
  let time = document.querySelector(".Lectures_time").value;
  let teacher = document.querySelector(".teacher").value;
  let Lectures_ID = document.querySelector(".Lectures_ID").value;
  let Lectures_Type = document.querySelector(".form-select").value;

  //   form-select

  if (
    Topic == "" ||
    time == "" ||
    date == "" ||
    teacher == "" ||
    Lectures_ID == "" ||
    Lectures_Type == ""
  ) {
    alert("Please fill all Data");
  } else {
    console.log("asdjhbs");
    adm.addstd(teacher, Topic, date, time, Lectures_ID, Lectures_Type);
    document.querySelector(".Topic").value = "";
    document.querySelector(".date").value = "";
    document.querySelector(".time").value = "";
    document.querySelector(".teacher").value = "";
    document.querySelector(".Lectures_ID").value = "";
    document.querySelector(".form-select").value = "";
  }
});

let ff = document.querySelector("#form6");

ff.addEventListener("submit", function () {
  event.preventDefault();

  let Lectures_ID = document.querySelector(".Lectures_IDD").value;
  if (Lectures_ID == "") {
    alert("Please Enter The Lecture_ID");
  } else {
    console.log("asdjhbs");
    adm.removeassignment(Lectures_ID);

    document.querySelector(".Lectures_IDD").value = "";
  }
});

console.log(adm);
function constr(d, a, b, c, e, f) {
  this.topic = a;
  this.date = b;
  this.time = c;
  this.teacher = d;
  this.Lectures_ID = e;
  this.Lectures_Type = f;
}
