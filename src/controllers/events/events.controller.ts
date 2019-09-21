import { BrowserWindow } from "electron";
import { IEvents } from "../../models/ievents.model";

class Events implements IEvents {
  public ready: boolean = false;

  constructor() {}

  public emit(window: BrowserWindow | null, eventName: string, data: any) {
    if (this.ready && window) {
      window.webContents.send(eventName, data);
    }
  }

  public listen(window: BrowserWindow, eventName: string): void {
    if (this.ready && window) {
      // @ts-ignore
      window.on(eventName, (event: any, arg: any) => {
        console.log(eventName + "happened");
      });
    }
  }

  public setReady(window: BrowserWindow | null) {
    if (window) {
      this.ready = true;
    }
  }
}

export default new Events();
