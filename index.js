localStorage.clear();
let addTaskButt = document.querySelector("#addTask");
addTaskButt.addEventListener("click", () => {
  let txt = document.querySelector("#taskTxt").value;
  let a = Date.now();
  if (txt!=""){
    
      localStorage.setItem(a, txt);
    }
  updateList();
});
updateList = () => {
  console.log(localStorage);
  let list = document.querySelector("#taskList");
  list.innerHTML = "";
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let item = localStorage.getItem(key);
    list.innerHTML += `<li id=${key} > ${item} <button onclick="deleteTask(${key})">delete</button></li>`;
    console.log(item);
  }
};

let deleteTask = (id) => {
  localStorage.removeItem(id);
  updateList();
};
