
let guest = [ "Aamir","Hamza", "Taha"];
console.log(" Great news ! I have found bigger dinner table !");

//adding more guests

guest.unshift("john");
guest.splice(guest.length / 2, 0, "Danial");
guest.push("Adam");

guest.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});

