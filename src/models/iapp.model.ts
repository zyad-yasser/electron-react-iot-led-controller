import { ISerialPort } from './iserial-port';
import { IAppWindow } from './iapp-window.model';
import { IEvents } from './ievents.model';

export interface IApp {
    app: any;
	appWindow: IAppWindow;
	serialPort: ISerialPort;
	events: IEvents;
    window: Electron.BrowserWindow | null;
    init(): void;
    attachEvents(): void;
}