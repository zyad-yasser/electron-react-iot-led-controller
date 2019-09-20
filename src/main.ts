import { app, BrowserWindow, ipcMain } from "electron";
import * as isDev from "electron-is-dev";
import * as path from "path";

const usb = require('usb');
usb.on('attach', (device: any) => {
  console.log(device);
});

process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = 'true';

let mainWindow: Electron.BrowserWindow | null;

function createWindow() {
  mainWindow = new BrowserWindow({
    height: 680,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false
    },
    width: 900
  });
  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );
  mainWindow.on("closed", () => mainWindow = null);
  mainWindow.webContents.openDevTools();
  mainWindow.setResizable(false);

  ipcMain.on("event",(event: any, arg: any) => {
    console.log("event raised");
  });
  setTimeout(() => {
    if (mainWindow) {
      mainWindow.webContents.send('event', {})
    }
  }, 5000)
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
