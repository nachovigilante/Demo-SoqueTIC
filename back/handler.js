import {
  subscribeGETEvent,
  subscribePOSTEvent,
  realTimeEvent,
  startServer,
} from "soquetic";

subscribePOSTEvent("message", (data) => {
  console.log(`Mensaje recibido: ${data.msg}`);
  return { msg: `Mensaje recibido: ${data.msg}` };
});

subscribeGETEvent("date", () => {
  const date = new Date();
  return `${date.getUTCDate()}/${date.getUTCMonth() + 1}`;
});

setInterval(() => {
  realTimeEvent("second", null);
}, 1000);

startServer();
