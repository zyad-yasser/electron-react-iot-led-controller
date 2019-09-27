import { ISerialPort } from "../../models/iserial-port";
import eventEmitter from "../event-emitter/event-emitter.controller";
import { serialPortConfig } from "../../constants";

const usb = require("usb");
const serialPort = require("serialport");

class SerialPort implements ISerialPort {
  public usb: any;
  public ports: any;
  private serialPort: any;

  constructor() {
    this.usb = usb;
    this.serialPort = serialPort;
    this.get();
    this.attachEvents();
  }

  private isLedStrip(device: any): boolean {
    if (
      device.deviceDescriptor.idVendor === serialPortConfig.idVendor &&
      device.deviceDescriptor.idProduct === serialPortConfig.idProduct
    ) {
      return true;
    }
    return false;
  }

  private attachEvents() {
    this.usb.on("attach", (device: any) => {
      this.get();
      const isLedStrip = this.isLedStrip(device);
      const serialPorts = this.ports;
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

  private get(): any {
    return this.serialPort.list(async (err: any, ports: any) => {
      let portsOutput = [...await ports];
      portsOutput = portsOutput.map((port: any) => port.comName);
      this.ports = err
        ? []
        : portsOutput;
    });
  }
}

export default new SerialPort();
