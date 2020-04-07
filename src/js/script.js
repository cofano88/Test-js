let data = [
  { firstName: "ashton", lastName: "kutcher", age: 40 },
  { firstName: "bradley", lastName: "pitt", age: 50 },
  { firstName: "bradley", lastName: "pitt", age: 50 },
  { firstName: "bradley", lastName: "pitt", age: 50 },
  { firstName: "ashton", lastName: "kutcher", age: 40 },
  { firstName: "bradley", lastName: "pitt", age: 50 },
  { firstName: "bradley", lastName: "pitt", age: 50 },
  { firstName: "bradley", lastName: "pitt", age: 50 },
  { firstName: "ashton", lastName: "kutcher", age: 40 },
  { firstName: "bradley", lastName: "pitt", age: 50 },
  { firstName: "bradley", lastName: "pitt", age: 50 },
  { firstName: "bradley", lastName: "pitt", age: 50 },
];

let table = document.getElementById("table");
for (let i = 0; i < data.length; i++) {
  let fn = data[i].firstName;
  let ln = data[i].lastName;
  let ag = data[i].age;
  let string = document.createElement("tr");
  string.setAttribute("class", "user");
  string.innerHTML = `
    <td>${fn}</td>
    <td>${ln}</td>
    <td>${ag}</td>`;
  table.append(string);
}

// -------------------------------------

const addUserBtn = document.getElementById("addUser_btn");
addUserBtn.onclick = addUser;

function addUser() {
  let wantAdd = confirm("Do you want to add new user?");
  if (wantAdd) {
    let fn = prompt("Confirm First Name");
    let ln = prompt("Confirm Last Name");
    let ag = prompt("Confirm age");
    let string = document.createElement("tr");
    string.setAttribute("class", "user");
    string.innerHTML = `
    <td>${fn}</td>
    <td>${ln}</td>
    <td>${ag}</td>`;
    table.append(string);
  }
}

// ------------------------------------------------------------------------------

let userStr = document.getElementsByClassName("user");
for (let i = 0; i < userStr.length; i++) {
  userStr[i].addEventListener("click", function () {
    userStr[i].classList.toggle("checked");
  });
}

const deleteUserBtn = document.getElementById("deleteUser_btn");
deleteUserBtn.onclick = deleteUser;

function deleteUser() {
  let checkedStr = document.getElementsByClassName("checked");
  if (checkedStr.length !== 0) {
    let wantDelete = confirm("Do you want to delete this user(s)?");
    if (wantDelete) {
      for (let i = 0; i < checkedStr.length; i++) {
        checkedStr[i].remove();
      }
    }
  }
}

// ------------------------------------------------------------------------------------

const changeUserBtn = document.getElementById("changeUser_btn");
changeUserBtn.onclick = changeUser;

function changeUser() {
  let checkedStr = document.getElementsByClassName("checked");
  if (checkedStr.length !== 0) {
    let wantChange = confirm("Do you want to change this user(s)?");
    if (wantChange) {
      for (let i = 0; i < checkedStr.length; i++) {
        let fn = prompt("Confirm new First Name");
        let ln = prompt("Confirm new Last Name");
        let ag = prompt("Confirm new age");
        checkedStr[i].innerHTML = `
      <td>${fn}</td>
      <td>${ln}</td>
      <td>${ag}</td>`;
        checkedStr[i].classList.toggle("checked");
      }
    }
  }
}
