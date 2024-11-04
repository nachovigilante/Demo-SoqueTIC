const form = document.getElementById("form");
const input = document.getElementById("input");
const a = document.getElementById("a");
const date = document.getElementById("fecha");
const seconds = document.getElementById("segundos");

connect2Server();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value) {
    postData("message", { msg: input.value }, (data) => {
      a.innerHTML = data.msg;
    });
    input.value = "";
  }
});

fetchData("date", (data) => {
  date.innerText = data;
});

receive("second", () => {
  seconds.innerText = parseInt(seconds.innerText) + 1;
});

connect2Server();
