function addingEventListener() {
  let button = document.querySelector('#button');
  button.addEventListener("click", () => alert("I was clicked"));
}
addingEventListener();