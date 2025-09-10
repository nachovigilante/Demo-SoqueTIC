// Levanta todos los elementos del DOM que se van a usar
const form = document.getElementById("form");
const input = document.getElementById("input");
const a = document.getElementById("a");
const date = document.getElementById("fecha");
const seconds = document.getElementById("segundos");

// Conecta al servidor
connect2Server();

/**
 * Manejador para el evento de envío de formulario.
 * Previene el comportamiento por defecto del formulario, verifica si el campo de entrada tiene valor,
 * envía el mensaje usando la función postEvent y actualiza el contenido de un elemento con la respuesta.
 *
 * @param {Event} e - El evento de envío del formulario.
 */
function formSubmitHandler(e) {
  // Previene el comportamiento por defecto del formulario (Refrescar la página, etc.)
  e.preventDefault();
  /**
   * Maneja la respuesta del evento "POST" de nombre "message", actualizando el contenido HTML de un elemento.
   * @param {Object} data - Objeto que contiene la respuesta del mensaje.
   * @param {string} data.msg - Mensaje a mostrar en el elemento HTML.
   */
  function messageResponseHandler(data) {
    a.innerHTML = data.msg;
  }
  if (input.value) {
    // Envía el evento "POST" de nombre "message" con el valor del input y maneja la respuesta con messageResponseHandler
    postEvent("message", { msg: input.value }, messageResponseHandler);
    input.value = "";
  }
}

/**
 * Responde al retorno del evento "GET" de nombre "date", y actualiza la pantalla con el valor proporcionado.
 * @param {string} data - La fecha que se mostrará en el elemento.
 */
function dateResponseHandler(data) {
  date.innerText = data;
}

/**
 * Incrementa el valor numérico del elemento 'seconds' en 1.
 * Asume que 'seconds' es un elemento DOM con un texto numérico.
 */
function secondEventHandler() {
  seconds.innerText = parseInt(seconds.innerText) + 1;
}

// Asocia la función formSubmitHandler al evento "submit" del formulario
form.addEventListener("submit", formSubmitHandler);

// Solicita el evento de tipo "GET" con nombre "date" y define la función que manejará la respuesta
getEvent("date", dateResponseHandler);

// Asocia la función secondEventHandler al evento "RealTime" de nombre "second"
subscribeRealTimeEvent("second", secondEventHandler);
