//crear el constructor
function Participante(id, nombre, edad, email) {
  this.id = id;
  this.nombre = nombre;
  this.edad = edad;
  this.email = email;
}

let usuarios = [
  { id: 1, nombre: "Juan", edad: 25, email: "juan@mail.com" },
  { id: 2, nombre: "Ana", edad: 30, email: "ana@mail.com" },
];

function mostrar() {
  const contenedor = document.querySelector("#listaUsuarios");
  contenedor.innerHTML = "";

  for (let i = 0; i < usuarios.length; i++) {
    const u = usuarios[i];
    const card = document.createElement("div");
    card.classList.add("card");
    card.textContent = `Nombre: ${u.nombre}, Edad: ${u.edad}, Email: ${u.email}`;
    contenedor.appendChild(card);
  }
}

let listaVisible = true;

// Alterna la visibilidad y el texto del botón
function mostrarOcultarLista() {
  const lista = document.getElementById("listaUsuarios");
  const btn = document.getElementById("botonMostrarOcultar");
  if (listaVisible) {
    lista.style.display = "none";
    btn.textContent = "Mostrar Participantes";
    listaVisible = false;
  } else {
    lista.style.display = "flex"; // CAMBIO IMPORTANTE
    btn.textContent = "Ocultar Participantes";
    listaVisible = true;
  }
}

function agregarParticipante() {
  const nombre = document.querySelector("#nombre").value;
  const edadStr = document.querySelector("#edad").value;
  const email = document.querySelector("#email").value;

  //valido los campos del formulario que no esten vacios
  if (!nombre || !edadStr || !email) {
    alert("Por favor, completá todos los campos.");
    return;
  }
  //paso edad a num
  const edadNum = Number(edadStr);
  if (Number.isNaN(edadNum) || !Number.isInteger(edadNum) || edadNum <= 0) {
    alert("La edad debe ser un número entero mayor a 0.");
    return;
  }
  if (!email.includes("@")) {
    alert("El email debe contener '@'.");
    return;
  }

  const id = usuarios[usuarios.length - 1].id + 1;

  const participante = new Participante(id, nombre, edadNum, email);
  usuarios.push(participante);
  //guardo el usuario en local storage
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  alert("Gracias por participar! Te deseamos mucha suerte");

  document.querySelector("#formRegisto").reset();

  mostrar();
}

window.onload = () => {
  // Intentar recuperar el apodo guardado
  const datos = localStorage.getItem("usuarios");
  if (datos) {
    usuarios = JSON.parse(datos);
  }

  let apodo = localStorage.getItem("apodo");

  // Si no existe, pedirlo al usuario
  if (!apodo) {
    let apodoIngresado = null;

    while (!apodoIngresado) {
      apodoIngresado = prompt(
        "¡Hola! ¿Cómo te gustaría que te llame? Compártenos tu apodo:"
      );
    }

    localStorage.setItem("apodo", apodoIngresado);
    apodo = apodoIngresado;
  }

  // Mostrar el mensaje
  const mensaje = document.getElementById("mensajeAlCargar");
  mensaje.textContent = `Bienvenido/a, ${apodo} 👋`;

  mostrar();
};
