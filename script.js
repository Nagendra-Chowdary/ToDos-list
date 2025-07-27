localStorage.clear();
document.querySelector("#add").addEventListener("click", () => {
  let a = document.querySelector("#taskField").value;
  document.querySelector("#taskField").value="";
  if (a == "") return;
  if (localStorage.length == 0) {
    localStorage.setItem("jsonStr", "[]");
  }
  let jsonArr = JSON.parse(localStorage.getItem("jsonStr"));
  jsonArr.push([a,""]);
  let jsonStr = JSON.stringify(jsonArr);
  localStorage.setItem("jsonStr", jsonStr);
  console.log(localStorage);

  updateTaskList();
});
let updateTaskList = () => {
  let jsonArr = JSON.parse(localStorage.getItem("jsonStr"));
  console.log(jsonArr);

  let elem = document.querySelector("#taskTable");
  elem.innerHTML = "";
  jsonArr.forEach((element, index) => {
    elem.innerHTML += `
        <tr>
        <td>${index + 1}</td>
        <td id="e${index}" class="${element[1]}">${element[0]}</td>
        <td><button id="a${index}" class="completed " onclick="markdone('${index}')">Done</button><button id="${index}" onclick="deleteTask(${index})" class="deletion" >X</button></td>
        </tr>
        `;
  });
};
let markdone = (id) => {
  console.log("enter");

  let jsonArr = JSON.parse(localStorage.getItem("jsonStr"));
  if(jsonArr[id][1]=="done"){

      jsonArr[id][1]="";
  }
  else{

      jsonArr[id][1]="done";
  }
    localStorage.clear();
  localStorage.setItem("jsonStr", JSON.stringify(jsonArr));
  updateTaskList();
 
};
let deleteTask = (ind) => {
  let jsonArr = JSON.parse(localStorage.getItem("jsonStr"));
  jsonArr.splice(ind, 1);
  localStorage.clear();
  localStorage.setItem("jsonStr", JSON.stringify(jsonArr));
  updateTaskList();
};
