let magicians: string[] = ["Jhony", "Molly", "Chris"];

function make_great(magicians: string[]): string[] {
    let greatMagicians: string[] = [];
    magicians.forEach(magician => {
        greatMagicians.push(`${magician} the Great`);
    });
    return greatMagicians;
}
function show_magicians(magicians: string[]){
    magicians.forEach(element => {
        console.log(element);
    })


 }
 
 let greatMagicians = make_great(magicians.slice());
 console.log("Original magicians:");
 show_magicians(magicians);
 console.log("Great magicians:");
 show_magicians(greatMagicians);
console.log("Original magicians:");
show_magicians(magicians); 
console.log("Great magicians:");
show_magicians(greatMagicians); 

