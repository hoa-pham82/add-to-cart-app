import {
  remove,
  ref,
  getDatabase,
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
const appSettings = {
  databaseURL:
    "https://fleet-point-407510-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

const app = initializeApp(appSettings);
const database = getDatabase(app);

export function clearInputField(element) {
  element.value = null;
}

export function addListItem(element, item) {
  let itemID = item[0];
  let itemValue = item[1];

  let newEl = document.createElement("li");
  newEl.textContent = itemValue;

  newEl.addEventListener("click", () => {
    let itemLocation = ref(database, `foods/${itemID}`);
    remove(itemLocation);

    console.log(`${itemValue} is removed from database!`);
  });

  element.append(newEl);
}

export function clearListItem(element) {
  element.innerHTML = "";
}
