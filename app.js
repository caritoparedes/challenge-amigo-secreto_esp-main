// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos= [];


function agregarAmigo(){
    const Amigo=document.getElementById("amigo");
    const nombreAmigo= Amigo.ariaValueMax.trim();

    //Validar campo no vacio

 if  (nombreAmigo ===""){
        alert("Digitar un nombre Valido");
        return;
            }

            //validar que nombre no este duplicado

            if(amigos.includes(nombreAmigo)){
            alert('El nombre ${nombreAmigo}' ya se encuntra en la Lista);
            return;
        }


        // agregar el nombre al arreglo amigos

          amigos.push(nombreAmigo);

        //actualizar la lista en el Html
        actualizarlista();

    }

     //actualizar la lista de amigos interfaz

     function actualizarlista(){
           const listaAmigos=document.getElementById('listaAmigos');

           //limpiar contenido de la lista actualizarlista
           listaAmigos.innerHTML="";
    
     //recorrer el arreglo

     for(let i=0;i <amigos.length;i++){
        const li=document.createElement('li');
        li.textContent=amigos[i];
        listaAmigos.appendChild(li);

     }

    }

//selecionar amigo secreto

function sortearAmigo(){
     //valdar si existen amigos disponibles

     if(amigos.length === 0){
        alert("no hay amigos disponibles para jugar");
        return;
     }
     //generar indice aleatorio

     const indiceAleatorio=Math.floor(Math.random() * amigos.length);
     const amigoSorteado= amigoSorteado[indiceAleatorio];

     const resultado =document.getElementById("resultado");
     resultado.innerHTML='Amigo sorteado es: <strong>${amigoSorteado}</strong>';
}

