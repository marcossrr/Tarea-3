// Ejemplo de insertAdjacentElement:

// 1- Seleccionamos el párrafo existente a partir del cual trabajaremos:
const paragraphOne = document.getElementsByTagName('p')[0];


function addParagrpahs() {
    //Creamos dos párrafos, uno para ubicarlo antes y otros después del existente.
    const paragraphTwo = document.createElement('p');
    paragraphTwo.textContent = 'Párrafo dos';
    const paragraphZero = document.createElement('p');
    paragraphZero.textContent = 'Párrafo cero';

    // Los ubicamos a partir de parrafoUno.
    paragraphOne.insertAdjacentElement('beforebegin', paragraphZero);
    paragraphOne.insertAdjacentElement('afterend', paragraphTwo);
}


// 2- Añadimos un evento click al párrafo seleccionado para que añada otros dos párrafos
// dinámicamente.
paragraphOne.addEventListener('click', addParagrpahs);

