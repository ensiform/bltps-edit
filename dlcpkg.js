const dlcPkgs = require("./GameInfo/Resources/Downloadable Packages.json");

let sortedDLCPkgs = [];

for (const dlc in dlcPkgs) {
    if (dlcPkgs.hasOwnProperty(dlc)) {
        sortedDLCPkgs.push(dlcPkgs[dlc]);
    }
}

sortedDLCPkgs.sort(function(a,b) {
    return a.id - b.id;
});

/* should be string: [ 'bank', 'backpack' ] */
function createItemDLCDropdowns( storage ) {
    for (const dlc in sortedDLCPkgs) {
        if (sortedDLCPkgs.hasOwnProperty(dlc)) {
            $(`#${storage}-weap-dropdown`).append(`<li><a href="#${storage}-weap-${sortedDLCPkgs[dlc].dlc_name.toLowerCase()}">${sortedDLCPkgs[dlc].display_name}</a></li>`);
            $(`#${storage}-item-dropdown`).append(`<li><a href="#${storage}-item-${sortedDLCPkgs[dlc].dlc_name.toLowerCase()}">${sortedDLCPkgs[dlc].display_name}</a></li>`);
        }
    }
}

module.exports = {
    dlcs : sortedDLCPkgs,
    createMenus: createItemDLCDropdowns
};