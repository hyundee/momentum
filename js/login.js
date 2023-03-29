const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const toDoForm = document.getElementById("todo-form");
const greetings = document.querySelector("h1#greeting");

const HIDDEN_CLASSNAME = "hidden";

const onLogin = (event) => {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);

  let userId = loginInput.value;
  localStorage.setItem("ID", userId); //userId 저장
  onGreetings(userId);
};

const onGreetings = (userId) => {
  greetings.classList.remove(HIDDEN_CLASSNAME);
  toDoForm.classList.remove(HIDDEN_CLASSNAME);
  greetings.innerText = `Hello, ${userId}!`;
};

const savedUserId = localStorage.getItem("ID"); //저장된 userId 호출

savedUserId === null
  ? loginForm.classList.remove(HIDDEN_CLASSNAME) +
    loginForm.addEventListener("submit", onLogin)
  : onGreetings(savedUserId);
