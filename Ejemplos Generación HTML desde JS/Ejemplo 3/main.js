// Ejemplo de replaceChild:

// 1- Con createElement creamos un elemento parrafo -etiqueta p en HTML-.
const paragraph = document.createElement('p');
paragraph.textContent = 'Párrafo cambiado dinámicamente';

// 2- Con insertBefore podemos añadir el nuevo elemento creado antes del hijo que especifiquemos.

// Seleccionamos el elemento padre (div) le añadimos con replaceChild el párrafo a intercambiar:
const div = document.getElementsByTagName('div')[0];
div.replaceChild(paragraph, document.getElementsByTagName('p')[0]);