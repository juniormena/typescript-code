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

//DESTRUCTURING FUNCIONES

interface Producto{
    desc:string;
    precio:number;
}

const telefono:Producto = {
    desc:'iPhone X',
    precio:900
}

const tablet:Producto = {
    desc:'Fire HD',
    precio:700
}

function calculaITBIS(productos:Producto[]):[number,number]{
    let total = 0;

    productos.forEach(({precio})=>{
        total += precio;
    });

    return [total,total * 0.18];
}

const articulos = [telefono, tablet];

const [total, itbis] = calculaITBIS(articulos);

console.log('Total: ', total);
console.log('ITBIS: ',itbis);