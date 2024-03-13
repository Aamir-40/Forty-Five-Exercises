var guest = ["Aamir", "Hamza", "Taha"];
//console.log(" Great news ! I have found bigger dinner table !");
//adding more guests
guest.unshift("john");
guest.splice(guest.length / 2, 0, "Danial");
guest.push("Adam");
//guest.forEach(guest => {
//console.log(`Dear ${guest}, would you like to join me for dinner?`);
//});
//console.log("Unfortunately, I can only invite two people for dinner.");
while (guest.length > 2) {
    var removedGuest = guest.pop();
    console.log("Sorry, ".concat(removedGuest, ", I can't invite you to dinner."));
}
guest.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you're still invited to dinner."));
});
guest.splice(0, guest.length);
console.log(guest); // Shows an empty list
