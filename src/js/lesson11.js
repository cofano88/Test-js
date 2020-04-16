let user = {
  name: "mike",
  years: 31,
};

let { name, years, isAdmin } = user;
console.log(name);
console.log(years);
console.log(isAdmin);

// ---------------------------------------------

let arr = [1, 2, 4, 4, 6];
let newarr = arr.map(plusNext);
console.log(newarr);
function plusNext(el, index, array) {
  if (index == array.length - 1) {
    return el;
  } else {
    el = el + array[index + 1];
    return el;
  }
}
// -----------------------------------------------------
