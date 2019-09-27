import logic from "../logic/logic.controller";
const Cylon = require("cylon");

export class Board {
  public connection: any = null;
  public port: string;
	private portIndex: number;
  private tempConnection: any = null;
  private logic = logic;
	
  constructor(private serialPorts: string[]) {
    this.serialPortCheck();
  }

	private connect(port: string): void {
    try {
      const { connections, devices, work } = this.logic;
      connections.arduino.port = port;
      this.tempConnection = Cylon.robot({ connections, devices, work }).start();
    } catch (err) {
      this.tempConnection = null;
    }
	}

	private serialPortCheck(): void {
    let validIndex: number = 999;
		this.serialPorts.forEach((port: string, index: number) => {
      this.connect(port);
      validIndex = index;
    });

    if (this.tempConnection) {
      this.connection = this.tempConnection;
      this.tempConnection = null;
      this.portIndex = validIndex;
      this.port = this.serialPorts[this.portIndex];
    }
  }
}
