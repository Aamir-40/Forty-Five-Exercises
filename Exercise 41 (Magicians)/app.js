//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
var magicians = ["harry potter", "jacky", "Molly"];
function show_magicians(magicians) {
    magicians.forEach(function (element) {
        console.log(element);
    });
}
show_magicians(magicians);
