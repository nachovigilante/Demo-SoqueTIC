const form = document.getElementById("form");
const input = document.getElementById("input");
const a = document.getElementById("a");
const date = document.getElementById("fecha");
const seconds = document.getElementById("segundos");

connect2Server();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value) {
    postEvent("message", { msg: input.value }, (data) => {
      a.innerHTML = data.msg;
    });
    input.value = "";
  }
});

getEvent("date", (data) => {
  date.innerText = data;
});

subscribeRealTimeEvent("second", () => {
  seconds.innerText = parseInt(seconds.innerText) + 1;
});

connect2Server();
