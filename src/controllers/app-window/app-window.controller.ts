import { BrowserWindow } from "electron";
import { windowConfig } from "../../constants";
import * as isDev from "electron-is-dev";
import * as path from "path";
import { IEvents } from 'src/models/ievents.model';

export class AppWindow {
  public window: BrowserWindow | null;
  constructor(private events: IEvents) {
    this.init();
    this.attachEvents();
  }
  private init() {
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
  }

  private attachEvents() {
    if (this.window) {
			this.window
				.on("closed", () => (this.window = null));

      this.window.webContents.once("dom-ready", () => {
				if (this.window) {
					this.window.webContents.send("event", {});
				}
			});
			this.events.emit(this.window);
    }
  }
}
