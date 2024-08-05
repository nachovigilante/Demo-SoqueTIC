import { onEvent, sendEvent, startServer } from "soquetic";

onEvent("message", (data) => {
  console.log(`Mensaje recibido: ${data.msg}`);
  return { msg: `Mensaje recibido: ${data.msg}` };
});

onEvent("date", () => {
  const date = new Date();
  return `${date.getUTCDate()}/${date.getUTCMonth() + 1}`;
});

setInterval(() => {
  sendEvent("second", null);
}, 1000);

startServer();
