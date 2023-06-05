// Render and control web pages.
//
// For more info, see:
// https://electronjs.org/docs/api/web-contents


// Create tray, dock, and application icons using PNG or JPG files.
//
// For more info, see:
// https://electronjs.org/docs/api/native-image


  // Let's first read an image.
const { app, BrowserWindow,Menu,Tray, nativeImage, webContents } = require('electron')
let tray
app.whenReady().then(() => {
  // You could also create a nativeImage from a local file,
  // a buffer, or an NSNamedImage.

  // Now, let's make a simple Tray icon.
  // If you're on a Mac, this will show up in the menu bar.
  tray = new Tray('tube.png')

  const contextMenu = Menu.buildFromTemplate([
    { label: 'Item1' },
    { label: 'Item2', type: 'radio' },
    { label: 'Item3', type: 'radio', checked: true },
    { label: 'Item4', type: 'radio' }
  ])
  const mainWindow = new BrowserWindow({ height: 1000, width: 500 ,titleBarOverlay :true })
  win.kiosk
    const contents = webContents.getAllWebContents()[0]

    // The WebContents class has dozens of methods and
    // events available. As an example, we'll call one
    // of them here: loadURL, which loads Electron's
    // home page.
    const options = { extraHeaders: 'pragma: no-cache\n' }
    contents.loadURL('https://www.tiktok.com/search?q=%23gaixinh&t=1685927380043', options)
 const template = [
    {
      label: 'Edit',
      submenu: [
        { role: 'back' },
        { role: 'undo' },
        { role: 'redo' },
        { type: 'separator' },
        { role: 'cut' },
        { role: 'copy' },
        { role: 'paste' }
      ]
    },
    {
      label: '🧰 YOUTUBE',
          click () {
    const contents = webContents.getAllWebContents()[0]

    // The WebContents class has dozens of methods and
    // events available. As an example, we'll call one
    // of them here: loadURL, which loads Electron's
    // home page.
    const options = { extraHeaders: 'pragma: no-cache\n' }
    contents.loadURL('https://tube8.vn/results?search_query=gai+xinh+tiktok&utm_source=gcafemenu', options)
          }
    },
        {
      label: '⚛️ ĐỌC TRUYỆN',
          click () {
    const contents = webContents.getAllWebContents()[0]

    // The WebContents class has dozens of methods and
    // events available. As an example, we'll call one
    // of them here: loadURL, which loads Electron's
    // home page.
    const options = { extraHeaders: 'pragma: no-cache\n' }
    contents.loadURL('https://truyen.oz1.hubs.vn?utm_source=gcafemenu', options)
          }
    },
         {
      label: '💞 TIKTOK',
          click () {
    const contents = webContents.getAllWebContents()[0]

    // The WebContents class has dozens of methods and
    // events available. As an example, we'll call one
    // of them here: loadURL, which loads Electron's
    // home page.
    const options = { extraHeaders: 'pragma: no-cache\n' }
    contents.loadURL('https://www.tiktok.com/search?q=%23gaixinh&t=1685927380043', options)
          }
    }
  ]

  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
  
  // This setTimeout is to demonstrate the method firing
  // for the demo, and is not needed in production.
  setTimeout(() => {
    const contents = webContents.getAllWebContents()[0]

    // The WebContents class has dozens of methods and
    // events available. As an example, we'll call one
    // of them here: loadURL, which loads Electron's
    // home page.
    const options = { extraHeaders: 'pragma: no-cache\n' }
    contents.loadURL('https://tube8.vn/results?search_query=gai+xinh+tiktok&utm_source=gcafemenu', options)
  }, 1000)
})
