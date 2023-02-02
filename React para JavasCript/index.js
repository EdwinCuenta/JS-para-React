//Objetos como parametros

const user = {
    nombre: 'Edwin',
    Edad: 20
}

function printInfo(user){
    return '<h1>hola '+ user.nombre+'</h1>'
}

console.log(printInfo(user));

document.body.innerHTML = printInfo(user); //innerhtml espera un string que sea formato de html
