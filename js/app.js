"use strict";

//QuerySelector sirve para capturar cualquier elemento del dom
const color = document.querySelector("#color");
const salida = document.querySelector("#salida"); //addEventListener sirve para capturar eventos

color.addEventListener("input", () => {
  const value = color.value;
  salida.innerHTML = value;
  document.body.style.background = value;
  console.log(value);
});