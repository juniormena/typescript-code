/*
    ===== Código de TypeScript =====
*/

interface Reproductor{
    volumen:number;
    segundo:number;
    cancion:string;
    detalles:Detalles
}

interface Detalles{
    autor:string;
    anio:number;
}

const reproductor:Reproductor = {
    volumen:50,
    segundo: 35,
    cancion:'Quiero ser como tu',
    detalles:{
        autor:'redimi2 & alex campos',
        anio:2016
    }
}

let { volumen, segundo, cancion, detalles:{anio, autor} } = reproductor;
//let { anio } = reproductor.detalles;
//let { anio } = detalles;


console.log(`el volumen de la cancion ${cancion} es ${volumen} y su anio ${anio}, escrita por ${autor}`)


//ARRAY DESTRUCTURING

const dbz:string[] = ['Goku', 'Vegeta','Gotenks']

const [pj1, pj2, pj3] = dbz;

console.log('personaje 1 ' + pj1);
console.log('personaje 2 ' + pj2);
console.log('personaje 3 ' + pj3);
