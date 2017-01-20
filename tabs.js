const path = require('path')
const TabGroup = require('electron-tabs')

let tabGrid = new TabGroup()

function createTabs() {
    let genTab = tabGrid.addTab({
        title: "General",
        iconURL: path.join('file://', __dirname, '/assets/icons/green%20vault%20symbol.png'),
        src: path.join('file://', __dirname, '/general.html'),
        visible: true,
        closable: false
    });
    let charTab = tabGrid.addTab({
        title: "Character",
        iconURL: path.join('file://', __dirname, '/assets/icons/red%20skull.png'),
        src: path.join('file://', __dirname, '/character.html'),
        visible: true,
        closable: false
    });
    let vehTab = tabGrid.addTab({
        title: "Vehicle",
        iconURL: path.join('file://', __dirname, '/assets/icons/wheel.png'),
        src: path.join('file://', __dirname, '/vehicle.html'),
        visible: true,
        closable: false
    });
    let moneyTab = tabGrid.addTab({
        title: "Currency",
        iconURL: path.join('file://', __dirname, '/assets/icons/pink%20seraph%20crystal.png'),
        src: path.join('file://', __dirname, '/currency.html'),
        visible: true,
        closable: false
    });
    let travelTab = tabGrid.addTab({
        title: "Fast Travel",
        iconURL: path.join('file://', __dirname, '/assets/icons/fast%20travel.png'),
        src: path.join('file://', __dirname, '/fasttravel.html'),
        visible: false,
        closable: false
    });
    let backpackTab = tabGrid.addTab({
        title: "Backpack (0)",
        iconURL: path.join('file://', __dirname, '/assets/icons/backpack.png'),
        src: path.join('file://', __dirname, '/backpack.html'),
        visible: true,
        closable: false
    });
    let bankTab = tabGrid.addTab({
        title: "Bank (0)",
        iconURL: path.join('file://', __dirname, '/assets/icons/bank.png'),
        src: path.join('file://', __dirname, '/bank.html'),
        visible: true,
        closable: false
    });
    let rawTab = tabGrid.addTab({
        title: "Raw",
        iconURL: path.join('file://', __dirname, '/assets/fugue/document-binary.png'),
        src: path.join('file://', __dirname, '/raw.html'),
        visible: true,
        closable: false
    });
    let aboutTab = tabGrid.addTab({
        title: "About",
        iconURL: path.join('file://', __dirname, '/assets/icons/question%20mark.png'),
        src: path.join('file://', __dirname, '/about.html'),
        visible: true,
        closable: false,
        active: true
    });
}

createTabs()