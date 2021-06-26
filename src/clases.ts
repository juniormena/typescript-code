class PersonaNomal{
    constructor(
        public nombre:string,
        public direccion:string
    ) {}

}

class Heroe extends PersonaNomal {

    constructor(
        public alterego:string,
        public edad:number,
        public nombreReal:string,
    ){
        super(nombreReal, "Bronx");
    }

}


const spiderman = new Heroe("Spider man",22,"Peter Parker");

console.log(spiderman);