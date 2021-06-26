/*
    ===== Código de TypeScript =====
*/


function sumar(a:number,b:number):number{
    return a + b;
}


const sumarr = (a:number,b:number):number =>a + b;

function multiplicar(num:number, base:number = 2, num2?:number):number{
    return num * base;
}

interface Personajee{
    nombre:string;
    pv:number;
    mostrarHp:()=>void;
    
}

function curar(personaje:Personajee, curarHP:number):void {
    personaje.pv += curarHP;

    console.log(personaje);
}

const newPersonaje:Personajee = {
    nombre:'Junior',
    pv:150,
    mostrarHp(){
        console.log(this.pv)
    }
}

curar(newPersonaje,45);

newPersonaje.mostrarHp();

