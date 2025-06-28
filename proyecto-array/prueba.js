// Simulamos una "base de datos"
let usuarios = [
  { id: 1, nombre: "Juan", edad: 25, email: "juan@mail.com", apodo: "Juani" },
  { id: 2, nombre: "Ana", edad: 30, email: "ana@mail.com", apodo: "Anita" }
];

// Alternar visibilidad de la lista
function alternarLista() {
  const lista = document.getElementById("listaUsuarios");

  if (lista.style.display === "none") {
    lista.style.display = "block";
    mostrarUsuarios(); // actualizamos al mostrar
  } else {
    lista.style.display = "none";
  }
}

// Mostrar todos los usuarios
function mostrarUsuarios() {
  const lista = document.getElementById("listaUsuarios");
  lista.innerHTML = "";

  usuarios.forEach(function(user) {
    const item = document.createElement("p");
    item.textContent = `${user.nombre} (${user.apodo}) - ${user.edad} años - ${user.email}`;
    lista.appendChild(item);
  });
}

// Mensaje personalizado al registrarse
function mostrarMensajeDeAgradecimiento(apodo) {
  const mensaje = document.getElementById("mensajeParticipacion");
  mensaje.textContent = `${apodo}, muchas gracias por participar y ¡suerte en el sorteo! 🎉`;
}

// Mensaje al cargar si ya participó
function mostrarMensajeAlCargar() {
  const apodo = localStorage.getItem("ultimoApodo");
  const mensaje = document.getElementById("mensajeAlCargar");
  if (apodo && mensaje) {
    mensaje.textContent = `Bienvenido/a de nuevo, ${apodo} 👋`;
  }
}

// Manejo del formulario
const form = document.getElementById("formRegistro");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const edad = parseInt(document.getElementById("edad").value);
  const email = document.getElementById("email").value;
  const apodo = document.getElementById("apodo").value;

  const nuevoUsuario = {
    id: usuarios.length + 1,
    nombre,
    edad,
    email,
    apodo
  };

  usuarios.push(nuevoUsuario);
  localStorage.setItem("ultimoApodo", apodo);

  mostrarMensajeDeAgradecimiento(apodo);
  mostrarUsuarios();
  form.reset();
});

// Al cargar la página
window.onload = () => {
  mostrarMensajeAlCargar();
};
