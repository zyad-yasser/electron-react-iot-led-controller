import { boardConfig } from "../../constants"

// Cylon.js logic
class Logic {
  public devices: any;
  public work: any;
  public connections: any;

  constructor() {
		this.connections = {
      arduino: {
        adaptor: boardConfig.adaptor
      }
    };
    this.devices = {
      led: { driver: "led", pin: 11 }
    };
    this.work = (devices: any) => {
      // @ts-ignore
      every((1).second(), function() {
        devices.led.toggle();
      });
    };
	}
}

export default new Logic();