function adopt() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email address?");
  let age = prompt("How old are you?");
  let h1 = document.querySelector("h1");
  if (age >= 18) {
    h1.innerHTML = "Hi," + name + " visit our clinic today!😊";
  } else {
    h1.innerHTML =
      "Hi," + name + " kindly inform your parents about our clinic🙂";
  }
}
let adoptButton = document.querySelector(".adopt-button");
adoptButton.addEventListener("click", adopt);
