const api_key = "IRi1f8rXkDjUdEPEoNVSc7Xf9HCzi9Z8GueHXkra";

const url = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`;

fetch(url)
  .then((response) => response.json())
  .then((data) => añadirContenido(data));

const añadirContenido = (data) => {
  console.log(data);
  let titulo = document.querySelector(".titulo-imagen");
  titulo.innerHTML = data.title;
  let autor = document.querySelector(".autor");
  autor.innerHTML = data.copyright;
  let fecha = document.querySelector(".fecha");
  fecha.innerHTML = data.date;
  let descripcion = document.querySelector(".descripcion");
  descripcion.innerHTML = data.explanation;
  let imagen = document.querySelector(".contenedor-imagen");
  imagen.src = data.url;

  imagen.addEventListener("click", () => {
    mostrarImagenHd(data);
  });
};

const mostrarImagenHd = (data) => {
  let imagenHd = document.querySelector(".img-modal");
  imagenHd.src = data.hdurl;
};
