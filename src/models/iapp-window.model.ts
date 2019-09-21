export interface IAppWindow {
    window: Electron.BrowserWindow | null;
    init(): void;
}