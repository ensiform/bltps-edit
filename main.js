'use strict'

const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const Menu = require('electron').Menu
const dialog = require('electron').dialog
const path = require('path')
const debug = /--debug/.test(process.argv[2])

// Manage unhandled exceptions as early as possible
process.on('uncaughtException', (e) => {
  console.error(`Caught unhandled exception: ${e}`)
  dialog.showErrorBox('Caught unhandled exception', e.message || 'Unknown error message')
  app.quit()
})

app.setName('Gibbed\'s Borderlands: The Pre-Sequel! Save Editor')

var mainWindow = null

function initialize() {
    function createWindow() {
        const windowStateKeeper = require('electron-window-state');
        let mainWindowState = new windowStateKeeper({
            defaultWidth: 895,
            defaultHeight: 560
        });

        var windowOptions = {
            width: mainWindowState.width,
            height: mainWindowState.height,
            x: mainWindowState.x,
            y: mainWindowState.y,
            minWidth: 895,
            title: app.getName()
        }

        if (process.platform === 'linux') {
            windowOptions.icon = path.join(__dirname, '/assets/app-icon/jack.png')
        }

        mainWindow = new BrowserWindow(windowOptions)
        mainWindow.loadURL(path.join('file://', __dirname, '/index.html'))
        //mainWindow.setMenu(null)

        mainWindowState.manage(mainWindow)

        // Launch fullscreen with DevTools open, usage: npm run debug
        if (debug) {
            mainWindow.webContents.openDevTools()
            mainWindow.maximize()
            require('devtron').install()
        }

        mainWindow.on('close', function() {
            mainWindowState.saveState(mainWindow)
        })

        mainWindow.on('closed', function () {
            mainWindow = null
        })
    }

    app.on('ready', function () {
        createWindow()
    })

    app.on('window-all-closed', function () {
        if (process.platform !== 'darwin') {
            app.quit()
        }
    })

    app.on('activate', function () {
        if (mainWindow === null) {
            createWindow()
        }
    })
}

initialize()
