import { BrowserWindow } from 'electron';

export interface IEvents {
    listen(window: BrowserWindow, eventName: string): void;
    emit(window: BrowserWindow): void;
}