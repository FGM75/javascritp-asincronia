import { getPersonajes, mataPersonajes } from "./funciones.js";

const nuevoPersonajes = document.querySelector(".cargar-personajes");
const matarFamilia = document.querySelector(".matar-familia");
const listadoPersonajes = document.querySelector(".personajes");
const personaje = document.querySelector(".personaje");

const cargarPersonaje = async () => {
  const personajes = await getPersonajes();
  ponerPersonajes(personajes);
};
cargarPersonaje();
// crear elemento personaje por cada elemento de la array: ejemplo el ejercico anterior got//
const vaciarPersonajes = () => {
  personaje.classList.add("personaje-dummy");
};
const ponerPersonajes = (arrayPersonajes) => {
  vaciarPersonajes();
  for (const {
    arrayPersonajes: { nombre, familia, vivo },
  } of ponerPersonajes) {
    const arraypersonajesElemento = document
      .querySelector(".personaje-dummy")
      .cloneNode(true);
    arraypersonajesElemento.classList.remove("personaje-dummy");
    // rellenar el elemnto con los datos del personaje//

    const nombrePersonaje = arraypersonajesElemento.querySelector(".nombre");
    nombrePersonaje.textContent = `${nombre} ${familia}`;
    listadoPersonajes.append(arraypersonajesElemento);
  }
};
