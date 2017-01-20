const path = require('path')
const electron = require('electron')

const BrowserWindow = electron.BrowserWindow
const app = electron.app

const debug = /--debug/.test(process.argv[2])

app.setName('Gibbed\'s Borderlands: The Pre-Sequel! Save Editor')

var mainWindow = null

function initialize() {
    function createWindow() {
        var windowOptions = {
            width: 895,
            minWidth: 895,
            height: 560,
            title: app.getName()
        }

        if (process.platform === 'linux') {
            windowOptions.icon = path.join(__dirname, '/assets/app-icon/jack.png')
        }

        mainWindow = new BrowserWindow(windowOptions)
        mainWindow.loadURL(path.join('file://', __dirname, '/index.html'))
        //mainWindow.setMenu(null)

        // Launch fullscreen with DevTools open, usage: npm run debug
        if (debug) {
            mainWindow.webContents.openDevTools()
            mainWindow.maximize()
            require('devtron').install()
        }

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
