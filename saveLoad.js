const {dialog} = require('electron').remote
const fs = require('fs')
const path = require('path')
const platform = require('electron').remote.process.platform
const mainApp = require('electron').remote.app

var localMainWindow = require('electron').remote.getCurrentWindow()

var openFileOptions = {
    properties: ['openFile'],
    filters: [ 
        { name: 'PC Save Files', extensions: ['sav'] },
        { name: 'X360 Save Files', extensions: ['sav'] },
        { name: 'PS3 Save Files', extensions: ['sav'] }
    ]
}

if(platform == 'linux') {
    openFileOptions.properties.push('showHiddenFiles');
    openFileOptions.defaultPath = path.join( mainApp.getPath('home'), '/.local', '/share', '/aspyr-media', '/borderlands the pre-sequel', '/willowgame', '/savedata' )
} else if( platform == 'darwin') {
    openFileOptions.defaultPath = path.join( mainApp.getPath('appData'), '/Borderlands The Pre-Sequel', '/WillowGame', '/SaveData')
} else if( platform == 'win32' ) {
    openFileOptions.defaultPath = path.join( mainApp.getPath('documents'), '/My Games', '/Borderlands The Pre-Sequel', '/WillowGame', '/SaveData')
} else {
    // bad
}

var saveFileOptions = {
    filters: [ 
        { name: 'PC Save Files', extensions: ['sav'] },
        { name: 'X360 Save Files', extensions: ['sav'] },
        { name: 'PS3 Save Files', extensions: ['sav'] }
    ] 
}

function readSaveFile( fileNames ) {
    fs.readFile( fileNames[0], null, (err, data) => {
        if (err) throw err;
        console.log(data);
    });
}

function openSaveFile() {
    dialog.showOpenDialog(localMainWindow, openFileOptions, readSaveFile);
}

function writeSaveFile() {
    dialog.showSaveDialog(localMainWindow, saveFileOptions);
}

var openButton = document.getElementById('fileopen');
if(openButton.addEventListener)
    openButton.addEventListener("click", openSaveFile, false);

var saveButton = document.getElementById('filesave');
if(saveButton.addEventListener)
    saveButton.addEventListener("click", writeSaveFile, false);