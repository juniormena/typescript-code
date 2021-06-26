function classDecorator<T extends { new (...args:any[]):{} }>(
    constructor: T
){
    return class extends constructor {
        newProperty = "new poperty";
        hello = "override";
    };
}


@classDecorator
class SuperClass{
    public myProperty:string = "ABC123";

    imprimir(){
        console.log('Hola Mundo');
    }
}


console.log(SuperClass)

const myClass = new SuperClass();

console.log(myClass)