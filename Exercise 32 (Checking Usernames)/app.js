"use strict";
let currentusers = ["aamir", "kazim", "wajid", "irfan", "kamran"];
let newusers = ["hamza", "talal", "shahzad", "waheed"];
newusers.forEach(newUser => {
    if (currentusers.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} will need to enter a new username.`);
    }
    else {
        console.log(`${newUser} is available.`);
    }
});
