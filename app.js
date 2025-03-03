// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigo= [];



function agregarAmigo() {
    let inputAmigo=document.getElementById("amigo");
    let nombreAmigo= inputAmigo.value;

    //Validar campo no vacio

 if  (!nombreAmigo){
        alert("Digitar un nombre Valido");
        return;
            }

          amigo.push(nombreAmigo);
          input.Amigo.value="";
          inputAmigo.focus();
          actualizarlista();
    }


     function actualizarlista(){
           let  listaAmigos=document.getElementById('listaAmigos');

           //limpiar contenido de la lista actualizarlista
           listaAmigos.innerHTML="";
    
     //recorrer el arreglo

     for (let i=0; i < amigo.length;i++) {
        
        let item=document.createElement("li");
        item.textContent=amigo[i];
        listaAmigos.appendChild(item);

     }

    }

function sortearAmigo(){
     //valdar si existen amigos disponibles

     if(amigo.length === 0){
        alert("No hay amigos disponibles para jugar");
        return;
     }
     let amigoSorteado=amigo[Math.floor(Math.random() * amigo.length)];
     let resultado = document.getElementById("resultado");  
     resultado.innerHTML =`El amigo sorteado es : ${amigoSorteado}`;

let limpiarlista= document.getElementById("listaAmigos");
limpiarlista.innerHTML="";


}
    
    



