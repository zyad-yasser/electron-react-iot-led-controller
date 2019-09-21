import { WindowConfig } from './models/window-config.model';

export const windowConfig: WindowConfig = {
    height: Number(process.env.HEIGHT) || 680,
    width: Number(process.env.width) || 900,
}