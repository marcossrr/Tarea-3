let titles = document.getElementByTagName("h1");
let img = [ 
[
    "bebidas/src/cafe/1.jpg",
    "bebidas/src/cafe/2.jpg",
    "bebidas/src/cafe/3.jpg",
    "bebidas/src/cafe/4.jpg",
    "bebidas/src/cafe/5.jpg"
],
[
    "bebidas/src/alcohol/1.jpg",
    "bebidas/src/alcohol/2.jpg",
    "bebidas/src/alcohol/3.jpg",
    "bebidas/src/alcohol/4.jpg",
    "bebidas/src/alcohol/5.jpg"
],
[
    "bebidas/src/infusiones/1.jpg",
    "bebidas/src/infusiones/2.jpg",
    "bebidas/src/infusiones/3.jpg",
    "bebidas/src/infusiones/4.jpg",
    "bebidas/src/infusiones/5.jpg"
]
];

for(let i = 1; i < titles.length; i++){
    titles[i].addEventListener('click', function{
        titles[1].remove();
        titles[1].remove();
        titles[1].remove();

        let imgs = img[i - 1];
        for(let a = 0; a < imgs.length; a++){
            let image = document.createElement("img");
            image.src = imgs[a];
            td.appendChild(image);
        }
    })
}
