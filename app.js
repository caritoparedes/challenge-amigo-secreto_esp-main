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

