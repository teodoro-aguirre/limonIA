import router from "./routes";

// Oyente para detectar cambios al momento de cargar 'load' o al momento de cambiar
// dirección 'hashchange' en los dos casos ejecutará la funcion router
window.addEventListener('load', router);
window.addEventListener('hashchange', router);