// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos= [];


function agregarAmigo(){
    const Amigo=document.getElementById("amigo");
    const nombreAmigo= Amigo.ariaValueMax.trim();

    //Validar campo no vacio

 if  (nombreAmigo==""){
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
           const listaAmigos=document.getElementById('ListaAmigos');

           //limpiar contenido de la lista actualizarlista
           listaAmigos.innerHTML="";
    
     //recorrer el arrelgo

     for(let i=0;i <amigos.length;i++){
        const li=document.createElement('li');
        li.textContent=amigos[i];
        listaAmigos.appendChild(li);

     }

    }



