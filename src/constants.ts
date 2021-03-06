import { WindowConfig } from './models/window-config.model';
import { SerialPortConfig } from './models/serial-port-config.model';
import { BoardConfig } from './models/board-config.model';
import { Page } from './models/page';

export const windowConfig: WindowConfig = {
    height: Number(process.env.HEIGHT) || 680,
    width: Number(process.env.WIDTH) || 900,
}

export const serialPortConfig: SerialPortConfig = {
    idVendor: Number(process.env.VENDOR_ID) || 9025,
    idProduct: Number(process.env.PRODUCT_ID) || 67
}

export const boardConfig: BoardConfig = {
    adaptor: process.env.ADAPTOR || "firmata"
}

export const pages: Page[] = [
    {
        id: 0,
        name: "All"
    },
    {
        id: 1,
        name: "Static"
    },
    {
        id: 2,
        name: "Rainbow"
    },
    {
        id: 3,
        name: "Music"
    },
]

export const defaultState = {
    colors: {
        red: 255,
        green: 255,
        blue: 255
      },
      mode: 'static'
}

export const development = process.env.DEVELOPMENT || false; 