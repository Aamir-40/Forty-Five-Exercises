/* Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
*/
/* lowercase*/
var personName = " Aamir Ali Shah";
console.log("lowercase:", personName.toLowerCase());
/*uppercase*/
console.log("uppercase:", personName.toUpperCase());
/*titlecase*/
console.log("titlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
