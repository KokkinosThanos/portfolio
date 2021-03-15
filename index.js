

let y = window.innerHeight;
console.log(y);

let section;
section = document.getElementsByTagName('section')[0];
section.style.marginTop = (y - 600) / 2 + "px";