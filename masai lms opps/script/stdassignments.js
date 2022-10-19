let assignment_data = JSON.parse(localStorage.getItem("asgnmt")) || [];
let arr = assignment_data;

function appenfunc() {
  let divmain = document.querySelector("#grid3");
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

    let Assignmenttype = document.createElement("h3");
    Assignmenttype.innerText = "New";
    Assignmenttype.style.backgroundColor = "#DC2626";
    Assignmenttype.style.fontSize = "12px";
    Assignmenttype.style.padding = "3px 5px";

    div1.onclick = () => {
      Assignmenttype.innerText = "Progress";

      Assignmenttype.style.backgroundColor = "#CA8A04";
    };
    div3.append(Assignmenttype);
    div3.id = "divprogNEW";
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
//  let Assignment_ID = document.createElement("h3");
//     Assignment_ID.innerText = "New";

//     div3.append(Assignment_ID);
//     div3.style.backgroundColor = "red";

//     div3.id = "div3";
//     div2.append(teacher, date, time);
//     let div4 = document.createElement("div");
//     div4.append(div2, div3);
//     div4.id = "div4";
//     div1.append(topic, div4);
//     div1.onclick = () => {
//       Assignment_ID.innerText = "Progress";

//       div3.style.backgroundColor = "CA8A04";
//     };
