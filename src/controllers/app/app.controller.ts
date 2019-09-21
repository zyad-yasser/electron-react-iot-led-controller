require("dotenv").config();
import { app } from "electron";
import appWindow from '../app-window/app-window.controller';
import serialPort from '../serial-port/serial-port.controller';
import events from '../events/events.controller';
import { IEvents } from '../../models/ievents.model';
import { ISerialPort } from '../../models/iserial-port';
import { IAppWindow } from '../../models/iapp-window.model';
import { IApp } from '../../models/iapp.model';

export class App implements IApp {
	public app: any;
	public appWindow: IAppWindow;
	public serialPort: ISerialPort;
	public events: IEvents;
	public window: Electron.BrowserWindow | null;
  constructor() {
		this.app = app;
		this.attachEvents();
	}

	public init() {
		this.appWindow = appWindow;
		this.appWindow.init();
		this.serialPort = serialPort;
		this.events = events;
		this.events.setReady(this.appWindow.window);
		this.window = this.appWindow.window;
	}

  public attachEvents() {
		this.app
			.on("ready", () => {
				this.init();
			})
			.on("window-all-closed", () => {
				if (process.platform !== "darwin") {
					app.quit();
				}
			})
			.on("activate", () => {
				if (this.window === null) {
					this.init();
				}
			});
  }
}