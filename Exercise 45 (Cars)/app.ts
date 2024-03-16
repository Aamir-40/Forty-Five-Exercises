type car = { 
    manufacturer: string;
    model: string;
    [key: string]: any;

}
 function createCar (manufacturer: string, model: string, optional: Record<string,any>): car{
    return{
        manufacturer,
        model,
     ...optional
    }
 }
const mycar: car = createCar ( "toyota","Corolla", {color : "black", year: "2024"});
console.log(mycar);



