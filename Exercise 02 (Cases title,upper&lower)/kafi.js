"use strict";
/* lowercase*/
let personName = " Aamir Ali Shah";
console.log("lowercase:", personName.toLowerCase());

/*uppercase*/
console.log("uppercase:", personName.toUpperCase());

/*titlecase*/
console.log("titlecase:", personName.replace(/\bw/g, c => c.toUpperCase()));
