

//let promedio=fnPromedioNotas();
let datoNombre="Carlos"
//console.log( "Mi nombre es "+promedio );


function fnPromedioNotas(){
    let arrNotasAlumnos=[14, 13, 17, 18, 7, 11, 5];

    console.log( arrNotasAlumnos );
    /*console.log( arrNotasAlumnos[4] );*/

    /*let nota=arrNotasAlumnos[0];
    console.log(nota);
    nota=nota+arrNotasAlumnos[1];
    console.log(nota);
    nota=nota+arrNotasAlumnos[2];
    console.log(nota);*/

    
    let notaAcumulada=0;
    let cantidadNotasAprobadas=0;

    for(let indice=0 ; indice<7 ; indice=indice+1){
        let nota= arrNotasAlumnos[indice];
        console.log("indice:"+indice);
        //if(nota>10){
            //let variableCondicional=8;
            //console.log("variableCondicional:"+variableCondicional);

            notaAcumulada=notaAcumulada+nota;               
            cantidadNotasAprobadas++;                    
            console.log("nota:"+nota);
            console.log("notaAcumulada:"+notaAcumulada);
        //} 
                
        //console.log("variableCondicional:"+variableCondicional);
    }


    //...continua el codigo cuando NO se cumple indice<7
    //console.log("luego de la iteracion");
    //console.log(nota);
    //console.log(notaAcumulada);
    console.log(cantidadNotasAprobadas);

    console.log(notaAcumulada/cantidadNotasAprobadas);

    return notaAcumulada/cantidadNotasAprobadas;
    
}

let dato1=10;
const constante=11;

//console.log(dato1);
//console.log(constante);



const usuario={
    nombre:"Carlos",
    contrasenia:"1234",
    correo:"carlosgonzales@pucp.edu.pe",
    anioNacimiento:1981,
    pais:"Peru"
}
//console.log(usuario);


const pelicula1={
    nombre:"Titanic1",
    fecha:"20/09/2024",
    precio:25.00,
    tipo:"Romantica"
}

const pelicula2={
    nombre:"Titanic2",
    fecha:"20/09/2024",
    precio:25.00,
    tipo:"Romantica"
}

const pelicula3={
    nombre:"Titanic3",
    fecha:"20/09/2024",
    precio:25.00,
    tipo:"Romantica"
}
console.log( pelicula1 );
console.log( pelicula1.nombre );
console.log( pelicula1.precio );

//console.log( pelicula2 );
//console.log( pelicula3 );



let arrPeliculas=[
    {
        nombre:"Titanic0",
        fecha:"20/09/2024",
        precio:25.00,
        tipo:"Romantica",
        categoria:["comedia", "accion"],
        director:{
            nombre:"Brian de Palma",
            pais:"Italia"
        }
    },

    {
        nombre:"Titanic1",
        fecha:"20/09/2024",
        precio:25.00,
        tipo:"Romantica"
    },

    {
        nombre:"Titanic2",
        fecha:"20/09/2024",
        precio:25.00,
        tipo:"Romantica"
    },

    {
        nombre:"Titanic3",
        fecha:"20/09/2024",
        precio:25.00,
        tipo:"Romantica"
    }

];

//console.log(arrPeliculas);

//console.log(arrPeliculas[2]);




let jsonAutomoviles='{"arreglo":['+
'{"marca":"Toyota",'+
'"nombre":"Corolla",'+
'"precio":25030.00,'+
'"tipo":"Sedan"}, '+

'{"marca":"Toyota",'+
'"nombre":"Yaris",'+
'"precio":17630.00,'+
'"tipo":"Sedan"}, '+

'{"marca":"Toyota",'+
'"nombre":"4Runner",'+
'"precio":62900.00,'+
'"tipo":"Camioneta"}, '+


'{"marca":"Hyundai",'+
'"nombre":"Elantra",'+
'"precio":19990.00,'+
'"tipo":"Sedan"}, '+

'{"marca":"Hyundai",'+
'"nombre":"All New Accent",'+
'"precio":15990.00,'+
'"tipo":"Sedan"}, '+

'{"marca":"Hyundai",'+
'"nombre":"Creta",'+
'"precio":19190.00,'+
'"tipo":"Camioneta"}, '+


'{"marca":"Mazda",'+
'"nombre":"New Mazda 2",'+
'"precio":21490.00,'+
'"tipo":"Sedan"}, '+

'{"marca":"Mazda",'+
'"nombre":"Mazda CX3",'+
'"precio":20590.00,'+
'"tipo":"Sedan"}, '+

'{"marca":"Mazda",'+
'"nombre":"Mazda CX5",'+
'"precio":30490.00,'+
'"tipo":"Camioneta"} '+
']}';

//console.log(jsonAutomoviles);

const arrAutomovilJson= JSON.parse(jsonAutomoviles);
//console.log(arrAutomovilJson);

//let cadenaNOJson="{Juan se fue a la playa}"
//const objetoNOJson= JSON.parse(cadenaNOJson);
//console.log(objetoNOJson);


for(item of arrAutomovilJson.arreglo){
    console.log(item);
    console.log(item.nombre + " - " + item.marca);
}
