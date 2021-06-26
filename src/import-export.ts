export interface Saludo{
    desc:string;
}


export function printSaludo(saludos:Saludo[]):void{
    saludos.forEach(saludo => {
        console.log('Saludo = ',saludo.desc)
    });
}