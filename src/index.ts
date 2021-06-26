/*
    ===== Código de TypeScript =====
*/

interface Pasajero{
    nombre:string;
    hijos?:string[];
}

const pasajero1: Pasajero ={
    nombre:'Junior'
}

const pasajero2:Pasajero = {
    nombre:'Mena',
    hijos:['Lisa','Bart']
}

function printHijos(pasajero:Pasajero):void{
    const cantidadHijos:number = pasajero.hijos?.length ?? 0;

    console.log(`El pasajero ${pasajero.nombre} tiene ${cantidadHijos} hij@s`)
}

printHijos(pasajero2);