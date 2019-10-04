import { boardConfig } from "../../constants"

// Cylon.js logic
export class Logic {
  public devices: any;
  public work: any;
  public connections: any;

  constructor(work: any) {
		this.connections = {
      arduino: {
        adaptor: boardConfig.adaptor
      }
    };
    this.devices = {
      red: { driver: "led", pin: 10 },
      green: { driver: "led", pin: 11 },
      blue: { driver: "led", pin: 6 },
    };
    this.work = work;
  }
}