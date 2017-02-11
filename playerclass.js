const playerClasses = require("./GameInfo/Resources/Player Classes.json");

let sortedClasses = [];

for (const cls in playerClasses) {
    if (playerClasses.hasOwnProperty(cls)) {
        sortedClasses.push(playerClasses[cls]);
    }
}

sortedClasses.sort(function(a,b) {
    return a.sort_order - b.sort_order;
});

for (const key in sortedClasses) {
    if (sortedClasses.hasOwnProperty(key)) {
        $("#dropdown-newclass").append(`<li><a href="#${sortedClasses[key].class.toLowerCase()}">${sortedClasses[key].name}</a></li>`);
    }
}
