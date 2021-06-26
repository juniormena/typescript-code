function whatTypeAmI<T>(argumento: T){
    return argumento;
}



let iamString = whatTypeAmI('Hola Mundo');
let iamNumber = whatTypeAmI(100);
let array = whatTypeAmI([5,6,7]);

let explicit = whatTypeAmI<number>(+"100")