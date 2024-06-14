//FUNCIONES
//declaro una funcion
/*function estoEsUnaFuncion() {
    console.log('uno');
    console.log('dos');
    console.log('tres');
}


/*function queDevuelveValor(){
    console.log('uno');
    console.log('dos');
    console.log('tres');
    return "la funcion ha devuelto una cadena de texto"
}


/*invoco una funcion
estoEsUnaFuncion();*/
/*/*let valorDeFuncion = queDevuelveValor
console.log(valorDeFuncion);
//queDevuelveValor();
//funcion anonima
const funcionExpresada = function (){
    console.log("Esto es una funcion expresada")
}

funcionExpresada()*/

/*
const a = [];
const b =[1, true, "hi!",["A","B","C",[1,2,3]]];

//console.log(b.length);
console.log(b[3][3][0]);

const c = Array.of("X","y","Z",9,8,7);
console.log(c);



const d = Array(100).fill("hola");
console.log(d);


const colores =["Rojo","azul","verde"];
console.log(colores);

colores.push("nigga");
console.log(colores);

colores.pop();
console.log(colores);

colores.forEach(function(el, i){
    console.log(`<li id="${i}"${el}</li>`);
});
/*
*/
const b = {

};

const mart = {
    nombre:"Martin",
    apellido:"Mercado",
    edad: 22,
    pasatiempos: "Jueguitos",
    soltero:true,
    contacto:{
        mail:"martinmercado1502@gmail.com",
        X:"@martinmercado02",
    },
    saludar:function(){
        console.log("hola :)");
    },
    decirMiNombre:function(){
        console.log(`Hola Me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años y me puedes seguir como ${this.contacto.X}`)
    }
}


console.log(mart);
console.log(mart["nombre"]);
console.log(mart["apellido"]);
console.log(mart.contacto.mail);
mart.decirMiNombre();
console.log(Object.values(mart));

console.log(mart.hasOwnProperty("nombre"))
console.log(mart.hasOwnProperty("Nacimiento"))









































