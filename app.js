// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos= [];



function agregarAmigo(){
    const inputAmigo=document.getElementById("amigo");
    const nombreAmigo= inputAmigo.value;

    //Validar campo no vacio

 if  (!nombreAmigo){
        alert("Digitar un nombre Valido");
        return;
            }

          amigos.push(nombreAmigo);
          input.Amigo.value="";
          inputAmigo.focus();

    }


     function actualizarlista(){
           const listaAmigos=document.getElementById('listaAmigos');

           //limpiar contenido de la lista actualizarlista
           listaAmigos.innerHTML="";
    
     //recorrer el arreglo

     amigos.forEach(amigo => {
        const li=document.createElement("li");
        li.textContent=amigo;
        listaAmigos.appendChild(li);

     });

    }

function sortearAmigo(){
     //valdar si existen amigos disponibles

     if(amigos.length === 0){
        alert("No hay amigos disponibles para jugar");
        return;
     }
     const Sorteado=Math.floor(Math.random() * amigos.length);
   const amigoSorteado = amigos[Sorteado];
   const resultado = document.getElementById("resultado");  
  resultado.innerHTML = <li>${amigoSorteado}</li>;



}
    
    


document.addEventListener('DOMContentLoaded',() => {
    document.getElementById("btnAdicionar").addEventListener("click",agregarAmigo);
    document.getElementById("btnSortear").addEventListener("click",sortearAmigo);
 });
