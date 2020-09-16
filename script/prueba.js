//Codigo para cambiar la imagen de Iron Man al hacer clic sobre ella

let miImagen = document.querySelector('img');
miImagen.onclick = function() {
    let miSrc = miImagen.getAttribute('src');

    if(miSrc === "image/IronMan.png"){
        miImagen.setAttribute('src', 'image/IronMan2.png');
    }else{
        miImagen.setAttribute('src', 'image/IronMan.png');
    }
}

//Codigo para agregar un mensaje de vienvenida personalizado

let miBoton = document.querySelector('button');
let miTitulo = document.querySelector('h1');

function aggNameUser() {
    let nameUser = prompt('Por favor, ingresa tu nombre');
    
    if(!nameUser){
        alert('Debes de agregar tu Nombre')
        aggNameUser();
    }else{
        localStorage.setItem('Nombre', nameUser);
        miTitulo.innerHTML = 'Iron Man es cool, ' + nameUser;
    }
}

if(!localStorage.getItem('Nombre')){
    aggNameUser();
}else{
    let nameSave = localStorage.getItem('Nombre');
    miTitulo.innerHTML = 'Iron Man es Cool, '+ nameSave;
}

miBoton.onclick = function(){
    aggNameUser();
}