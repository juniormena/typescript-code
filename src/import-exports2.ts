import { printSaludo, Saludo } from "./import-export";


const saludos:Saludo[] = [
    {
        desc:'Hola'
    },
    {
        desc:'Buenos dias'
    },
    {
        desc:'Buenas tardes'
    }
];

printSaludo(saludos);
