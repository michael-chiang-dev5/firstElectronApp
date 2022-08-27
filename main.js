// include the Node.js 'path' module at the top of your file
const path = require('path')

const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js')
      }
    })  
    win.loadFile('index.html')
  }

// for non-mac platforms, close the app when the app window is closed
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })

app.whenReady().then(() => {
    createWindow()
    // on macs, the app can be be open but without an app window. This creates
    // a window if the app is activated and there is no window. If you are not 
    // developing for Mac, you can remove this snippet
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})