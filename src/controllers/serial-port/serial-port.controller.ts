import { ISerialPort } from '../../models/iserial-port';
import eventEmitter from '../event-emitter/event-emitter.controller';

const usb = require("usb");
const serialPort = require("serialport");

class SerialPort implements ISerialPort {
	public usb: any;
	public ports: any;
	private serialPort: any;

  constructor() {
		this.init();
		this.attachEvents();
	}
	
	private init() {
		this.usb = usb;
		this.serialPort = serialPort;
		this.get();
	}

	private isLedStrip(device: any): boolean {
		if (device.deviceDescriptor.idVendor === 9025 && device.deviceDescriptor.idProduct === 67) {
			return true;
		}
		return false;
	}

  private attachEvents() {
    this.usb.on("attach", (device: any) => {
			const isLedStrip = this.isLedStrip(device);
			const serialPorts = this.get();
			if (isLedStrip) {
				eventEmitter.emit("connected", serialPorts);
			}
    });

    this.usb.on("detach", (device: any) => {
			const isLedStrip = this.isLedStrip(device);
      if (isLedStrip) {
				eventEmitter.emit("disconnected");
			}
    });
	}
	
	private get(): any[] | null {
		return this.serialPort.list((err: any, ports: any) => {
			if (err) {
				return null;
			}
			this.ports = ports;
			return ports;
		});
	}
}

export default new SerialPort();