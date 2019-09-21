const usb = require("usb");
const serialPort = require("serialport");

export class SerialPort {
	private usb: any; 
	private serialPort: any;

  constructor() {
		this.init();
		this.attachEvents();
		this.get();
	}
	
	private init() {
		this.usb = usb;
		this.serialPort = serialPort;
	}

  private attachEvents() {
    this.usb.on("attach", (device: any) => {
      console.log(device);
      console.log(process.env.BROWSER);
    });

    this.usb.on("detach", (device: any) => {
      console.log(device);
    });
	}
	
	private get() {
		this.serialPort.list(function (err: any, ports: any) {
			ports.forEach(function(port: any) {
				console.log(port.comName);
				console.log(port.pnpId);
				console.log(port.manufacturer);
			});
		});
	}
}