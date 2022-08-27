# firstElectronApp
This is a basic "Hello World" Electron app created according to directions given in:
https://www.electronjs.org/docs/latest/tutorial/quick-start 

`$ npm start` to run this app

## package.json
File created using `$ npm init`. Important fields include:
* main: should point to `main.js` for electron apps
* scripts: add `"start": "electron ."`

## main.js
This file needs to be created manually. It is the entry point for the app, and this entry point is defined in `package.json`

## index.html
This file needs to be created manually. It is the view for the app. `main.js` creates a window and loads `index.html` into the window.

## preload.js
This file needs to be created manually. Preload scripts have access to `window`, `document`, and `node`. `preload.js` is attached in the `BrowserWindow` constructor in `main.js`
