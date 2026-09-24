let image = document.createElement('img');
let secondimage = document.createElement('img');
let thirdimage = document.createElement('img');
let td = document.getElementsByTagName('td')[0];
let title = document.getElementsByTagName('h1')[0];
let secondTitle = document.createElement('h1');
let thirdTitle = document.createElement('h1');

image.src = "src/cafe/1.jpg";
secondimage.src = "src/alcohol/1.jpg";
thirdimage.src = "src/infusiones/1.jpg";



title.textContent = "Cafe";
title.style.backgroundImage = "image"
secondTitle.textContent = "Alcohol";
thirdTitle.textContent = "Infusiones";

 
td.appendChild(secondTitle);
td.appendChild(thirdTitle);


