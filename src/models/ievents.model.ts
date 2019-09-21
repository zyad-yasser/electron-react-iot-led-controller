export interface IEvents {
    listen(window: Electron.BrowserWindow | null, eventName: string): void;
    emit(window: Electron.BrowserWindow | null, eventName: string, data: any): void;
    setReady(window: Electron.BrowserWindow | null): void
}