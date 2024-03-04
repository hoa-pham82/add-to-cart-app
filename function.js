export function clearInputField(element) {
  element.value = null;
}

export function addListItem(element, value) {
  element.innerHTML += `<li>${value}</li>`;
}

export function clearListItem(element) {
  element.innerHTML = "";
}
