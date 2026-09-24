// Ejemplo appendChild:

let div = document.getElementsByTagName('div')[0];


function onClick(){
    // Creamos elemento 'p'
    let paragraph = document.createElement('p');
    // Indicamos un texto
    paragraph.textContent = 'Nuevo';
    // Lo añadimos
    div.appendChild(paragraph);  
}


div.addEventListener('click', onClick);
