let image = document.createElement('img');
let secondimage = document.createElement('img');
let thirdimage = document.createElement('img');
let td = document.getElementsByTagName('td')[0];
let title = document.getElementsByTagName('h1')[1];
let secondTitle = document.createElement('h1');
let thirdTitle = document.createElement('h1');

td.appendChild(secondTitle);
td.appendChild(thirdTitle);

title.style.backgroundImage = "url('./src/cafe/1.jpg')";
title.style.width = "450px";
title.style.height = "300px";

secondTitle.textContent = "Alcohol";
secondTitle.style.backgroundImage = "url('./src/alcohol/1.jpg')";
secondTitle.style.width = "450px";
secondTitle.style.height = "300px";

thirdTitle.textContent = "Infusiones";
thirdTitle.style.backgroundImage = "url('./src/infusiones/1.jpg')";
thirdTitle.style.width = "450px";
thirdTitle.style.height = "300px";

td.style.display = "flex";
td.style.justifyContent = "center";
td.style.width = "450px";
td.style.height = "300px";
 



