/*
    ===== Código de TypeScript =====
*/


let habilidades:string[] = ['sfgsfdg','2'];

interface Personaje{
    nombre : string;
    hp:number;
    habilidades:string[];
    puebloNatal?:string;
}


const personaje:Personaje = {
    nombre:'Strider',
    hp:100,
    habilidades:['Bash','Counter', 'Healing']
}


personaje.puebloNatal = 'fgsfgsdfg';

console.table(personaje);