// Importa las funciones de la librería soquetic
import {
  subscribeGETEvent,
  subscribePOSTEvent,
  realTimeEvent,
  startServer,
} from "soquetic";

/**
 * Maneja un evento POST de nombre "mensaje", console logueando el mensaje recibido y devolviendo un objeto como respuesta.
 *
 * @param {Object} data - El objeto de datos que contiene el mensaje.
 * @param {string} data.msg - El mensaje recibido.
 * @returns {Object} Un objeto que contiene el mensaje de confirmación (en el atributo msg).
 */
function messageEventHandler(data) {
  console.log(`Mensaje recibido: ${data.msg}`);
  return { msg: `Mensaje recibido: ${data.msg}` };
}

/**
 *  Maneja un evento "GET" de nombre "date". Devuelve la fecha y el mes actual como un string en el formato "día/mes".
 *
 * @returns {string} El día y mes actual (por ejemplo, "15/6").
 */
function dateEventHandler() {
  const date = new Date();
  return `${date.getUTCDate()}/${date.getUTCMonth() + 1}`;
}

/**
 *  Función para enviar un evento "RealTime" de nombre "second", sin datos adicionales.
 *
 * @function
 * @returns {void}
 */
function sendSecond() {
  realTimeEvent("second", null);
}

// Suscribe el evento POST "message" y lo maneja con la función messageEventHandler
subscribePOSTEvent("message", messageEventHandler);

// Suscribe el evento GET "date" y lo maneja con la función dateEventHandler
subscribeGETEvent("date", dateEventHandler);

// Envía el evento "second" cada segundo usando la función sendSecond
setInterval(sendSecond, 1000);

// Inicia el servidor
startServer();
