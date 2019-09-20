import { app, BrowserWindow, ipcMain } from "electron";
import * as isDev from "electron-is-dev";
import * as path from "path";
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
  mainWindow.on("closed", () => (mainWindow = null));
  mainWindow.webContents.openDevTools();

  ipcMain.on("btnclick",(event: any, arg: any) => {
    console.log("received a aba !" + arg)
  });
  setTimeout(() => {
    // @ts-ignore
    mainWindow.webContents
      .send('zoza', "FUF YOY")
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
