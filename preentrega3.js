function Participante(id,nombre,edad,email){
    this.id=id;
    this.nombre=nombre;
    this.edad=edad;
    this.email=email;
}
let usuarios = [
  { id: 1, nombre: "Juan", edad: 25, email: "juan@mail.com" },
  { id: 2, nombre: "Ana", edad: 30, email: "ana@mail.com" }
];
function mostrar(){
    //var=recuperar el id 
    let id=document.querySelector("#listaUsuarios");
    //for q recorre el array
    for (let i = 0; i < usuarios.length; i++) {
      id.innerHTML +=`<li>nombre: ${usuarios[i].nombre}, edad: ${usuarios[i].edad}, email: ${usuarios[i].email} </li>`;
    }
}



window.onload = function() {
  
  if(localStorage.getItem("apodo")==null){
      let nuevoApo = prompt("¿Como te gustaria que te llame?");
      localStorage.setItem("apodo", `${nuevoApo}`);
    } 
  let apodo = localStorage.getItem("apodo"); 
  alert(`Hola ${apodo}!`)  
};