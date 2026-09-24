// Ejemplo de insertBefore:

// 1- Con createElement creamos un elemento parrafo -etiqueta p en HTML-.
const paragraph = document.createElement('p');
paragraph.textContent = 'Párrafo creado dinámicamente';

// 2- Con insertBefore podemos añadir el nuevo elemento creado antes del hijo que especifiquemos.
// Seleccionamos el div y le añadimos con insertBefore el párrafo creado, que se ubicará ANTES del párrafo existente:
const div = document.getElementsByTagName('div')[0];
div.insertBefore(paragraph, document.getElementsByTagName('p')[0]);