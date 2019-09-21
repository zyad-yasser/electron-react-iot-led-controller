import { BrowserWindow } from "electron";
import { windowConfig } from "../../constants";
import * as isDev from "electron-is-dev";
import * as path from "path";
import { IAppWindow } from '../../models/iapp-window.model';
import eventEmitter from '../event-emitter/event-emitter.controller';

class AppWindow implements IAppWindow {
	public window: Electron.BrowserWindow | null;
  constructor() {}
  public init() {
    this.window = new BrowserWindow({
      height: windowConfig.height,
      width: windowConfig.width,
      webPreferences: {
        nodeIntegration: true,
        webSecurity: false
      },
      frame: false
    });
    this.window.loadURL(
      isDev
        ? "http://localhost:3000"
        : `file://${path.join(__dirname, "../build/index.html")}`
    );
    this.window.webContents.openDevTools();
		this.window.setResizable(false);
		this.attachEvents();
  }

  private attachEvents() {
    if (this.window) {
			this.window
				.on("closed", () => (this.window = null));
			this.window.webContents.once("dom-ready", () => {
				eventEmitter.emit('dom-ready');
			});
    }
  }
}

export default new AppWindow();
