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
    //for q recorre el array
    for (let i = 0; i < usuarios.length; i++) {
      id.innerHTML +=`<li>nombre: ${usuarios[i].nombre}, edad: ${usuarios[i].edad}, email: ${usuarios[i].email} </li>`;
    }
}

function agregarParticipante() { 
  const nombre = document.querySelector("#nombre").value;
  const edad = document.querySelector("#edad").value;
  const email = document.querySelector("#email").value;

  const id = usuarios[usuarios.length - 1].id + 1;

  const participante = new Participante(id, nombre, edad, email);
  usuarios.push(participante);
}

window.onload = () => {
  // lo que haya dentro de localStorage se guarda en apodo
  let apodo = localStorage.getItem("apodo");
  
  // Si no existe, le pedimos al usuario que lo ingrese
  if (!apodo) {
    let apodoIngresado;

    while (apodoIngresado === null){
      apodoIngresado = prompt("¡Hola! ¿Cómo te gustaría que te llame? Compartenos tu apodo:");
    };

    localStorage.setItem("apodo", apodoIngresado);
    apodo = apodoIngresado
  }
  // Mostramos el mensaje en la pantalla
  const mensaje = document.getElementById("mensajeAlCargar");
  mensaje.textContent = `Bienvenido/a, ${apodo} 👋`;
};