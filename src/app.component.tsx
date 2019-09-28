const { ipcRenderer } = require('electron');
import * as React from 'react';
import LayoutComponent from './components/layout/layout.component';
import ColorPickerComponent from './components/color-picker/color-picker.component';
import MainComponent from './components/main/main.component';
import { Board } from './controllers/board/board.controller';
import "./app.component.sass"

class AppComponent extends React.Component {
  public board: any;
  public emitToIPCMain(data: any) {
    ipcRenderer.send("event", data);
  }
  public componentDidMount() {
    ipcRenderer.on("connected", (emitter: any, ports: string[]) => {
      this.board = new Board(ports);
    });

    ipcRenderer.on("disconnected", (emitter: any, data: any) => {
      this.board = null;
    });
  }
  public render() {
    return (
      <>
        <LayoutComponent>
          <MainComponent emitToIPCMain={this.emitToIPCMain}/>
        </LayoutComponent>
        <ColorPickerComponent />
      </>
    );
  }
}

export default AppComponent;

