let assignment_data = JSON.parse(localStorage.getItem("lecture")) || [];
let arr = assignment_data;
function appenfunc() {
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
    Lectures_ID.innerText = "Present";
    div3.append(Lectures_ID);
    div3.id = "div3_lec_idd";
    div2.append(teacher, date, time);
    let div4 = document.createElement("div");
    div4.append(div2, div3);
    div4.id = "div4";
    div1.append(divlive, div4);
    divmain.append(div1);
  });
}
appenfunc();
