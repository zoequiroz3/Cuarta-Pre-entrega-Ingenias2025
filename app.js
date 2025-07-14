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

function mostrar(){
    //var=recuperar el id 
    let id=document.querySelector("#listaUsuarios");

    //limpio los usuarios que haya
    id.innerHTML = "";

    //for q recorre el array para mostrarlos a los usuarios
    for (let i = 0; i < usuarios.length; i++) {
      id.innerHTML +=`<div class="card"> nombre: ${usuarios[i].nombre}, edad: ${usuarios[i].edad}, email: ${usuarios[i].email}<div>`;
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
  if ( Number.isNaN(edadNum) || !Number.isInteger(edadNum) || edadNum <= 0) {
    alert("La edad debe ser un número entero mayor a 0.");
    return;
  }
  if (!email.includes("@")) {
    alert("El email debe contener '@'.");
    return;
  }


  const id = usuarios[usuarios.length - 1].id + 1;

  const participante = new Participante(id, nombre, edad, email);
  usuarios.push(participante);
  alert("Gracias por participar! Te deseamos mucha suerte");

  document.querySelector("#formRegisto").reset()

  mostrar();
}

window.onload = () => {
  // Intentar recuperar el apodo guardado
  let apodo = localStorage.getItem("apodo");

  // Si no existe, pedirlo al usuario
  if (!apodo) {
    let apodoIngresado = null;

    while (!apodoIngresado) {
      apodoIngresado = prompt("¡Hola! ¿Cómo te gustaría que te llame? Compártenos tu apodo:");
    }

    localStorage.setItem("apodo", apodoIngresado);
    apodo = apodoIngresado;
  }

  // Mostrar el mensaje
  const mensaje = document.getElementById("mensajeAlCargar");
  mensaje.textContent = `Bienvenido/a, ${apodo} 👋`;
};