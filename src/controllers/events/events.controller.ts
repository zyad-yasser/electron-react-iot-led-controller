import { BrowserWindow } from "electron";
import { IEvents } from "src/models/ievents.model";

export class Events implements IEvents {
  public emit(window: BrowserWindow) {
    window.webContents.once("dom-ready", () => {
      window.webContents.send("dom-ready", true);
    });
  }

  public listen(window: BrowserWindow, eventName: string): void {
    // @ts-ignore
    window.on(eventName, (event: any, arg: any) => {
      console.log("event raised");
    });
  }
}
