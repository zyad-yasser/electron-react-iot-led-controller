const { ipcRenderer } = require('electron');
import * as React from 'react';
import * as styles from './app.component.sass';
import LayoutComponent from './components/layout/layout.component';
import ColorPickerComponent from './components/color-picker/color-picker.component';
import MainComponent from './components/main/main.component';
import { Board } from './controllers/board/board.controller';

class AppComponent extends React.Component {
  public board: any;
  public emitToIPCMain(data: any) {
    ipcRenderer.send("event", data);
  }
  public componentDidMount() {
    ipcRenderer.on("connected", (emitter: any, ports: string[]) => {
      console.log(ports)
      this.board = new Board(ports);
    });
  }
  public render() {
    return (
      <>
        <div className={styles.app}>app component works !</div>
        <LayoutComponent>
          <MainComponent emitToIPCMain={this.emitToIPCMain}/>
        </LayoutComponent>
        <ColorPickerComponent />
      </>
    );
  }
}

export default AppComponent;

