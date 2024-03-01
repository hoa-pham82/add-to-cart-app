// function logValue() {
//   let input = document.getElementById("input-field").value;
//   console.log(input);
// }

const inputEl = document.getElementById("input-field");
const addButtonEl = document.getElementById("add-button");

addButtonEl.addEventListener("click", () => {
  let inputVal = inputEl.value;
  console.log(inputVal);
});
