var i = "motor";
alert(i);
i = "start";
console.log(i);

var bmw_523 = {
  made: "bmw",
  cons: 10,
  diesel: true
};
var mb_e320 = {
  made: "mb",
  cons: 11,
  diesel: false
};
var audi_a6 = {
  made: "audi",
  cons: 15,
  diesel: false
};
alert(Object.values(bmw_523));
alert(Object.values(mb_e320));
alert(Object.values(audi_a6));
console.log(bmw_523);
console.log(mb_e320);
console.log(audi_a6);

var age = prompt("Give me your age, quickly!");
alert("Congrads, you are " + age + " years old!");
if (age >= 18) {
  alert("You are adult");
} else {
  alert("You are not adult, get out!");
}
