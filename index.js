import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
import { clearInputField, addListItem } from "../function.js";

const appSettings = {
  databaseURL:
    "https://fleet-point-407510-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const foodInDB = ref(database, "foods");

const inputEl = document.getElementById("input-field");
const addButtonEl = document.getElementById("add-button");
const foodList = document.getElementById("food-list");

addButtonEl.addEventListener("click", () => {
  let inputVal = inputEl.value;
  push(foodInDB, inputVal);
  console.log(`${inputVal} added to database`);

  // add food to the list of foods
  addListItem(foodList, inputVal);
  console.log(`${inputVal} added to the list`);

  // Set the input field to be empty when pressing button
  clearInputField(inputEl);
});
