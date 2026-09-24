// Ejemplo de insertAdjacentElement:

// 1- Seleccionamos el párrafo existente a partir del cual trabajaremos:
const paragraphOne = document.getElementsByTagName('p')[0];

// 2-Creamos dos párrafos, uno para ubicarlo antes y otro para ubicarlo después del seleccionado.
const paragraphTwo = document.createElement('p');
paragraphTwo.textContent = 'Párrafo dos';
const paragraphZero = document.createElement('p');
paragraphZero.textContent = 'Párrafo cero';


// Lo ubicamos a partir de parrafoUno.
paragraphOne.insertAdjacentElement('beforebegin', paragraphZero);
paragraphOne.insertAdjacentElement('afterend', paragraphTwo);