import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

import { clearInputField, addListItem, clearListItem } from "../function.js";

const appSettings = {
  databaseURL:
    "https://fleet-point-407510-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const foodInDB = ref(database, "foods");

const inputEl = document.getElementById("input-field");
const addButtonEl = document.getElementById("add-button");
const foodListEl = document.getElementById("food-list");

// Get data from database
onValue(foodInDB, (snapshot) => {
  let foodArr = Object.values(snapshot.val());

  // clear the showing list
  clearListItem(foodListEl);

  // Get items from database
  for (let i = 0; i < foodArr.length; i++) {
    addListItem(foodListEl, foodArr[i]);
  }
});

// On click event
addButtonEl.addEventListener("click", () => {
  let inputVal = inputEl.value;
  push(foodInDB, inputVal);
  console.log(`${inputVal} added to database`);

  clearInputField(inputEl);
});
