const { ipcRenderer } = require('electron');
import * as React from 'react';
import LayoutComponent from './components/layout/layout.component';
import { Board } from './controllers/board/board.controller';
import "./app.component.sass"
import eventEmitter from './helpers/react-events/react-events.helper';
import { work } from './helpers/work/work.helper';
import { defaultState } from './constants'

class AppComponent extends React.Component {
  public board: any;
  public state = {
    colors: {
      red: 255,
      green: 255,
      blue: 255
    },
    mode: 'static',
    speed: 2
  }

  public handleEvents() {
    ipcRenderer.on("connected", (emitter: any, ports: string[]) => {
      this.board = new Board(ports);
    });

    ipcRenderer.on("disconnected", (emitter: any, data: any) => {
      this.board = null;
    });
    eventEmitter.on('apply', () => {
      const { colors, mode, speed } = this.state;
      const newWork = work(colors, mode, speed);
      this.board.reconnect(newWork);
    });

    eventEmitter.on('default', () => {
      const colors = defaultState.colors;
      const mode = defaultState.mode;
      this.setState({...this.state, colors, mode});
      this.board.connection.work = work(colors, mode);
    });

    eventEmitter.on('change', ({colors, mode, speed}: any) => {
      this.setState({...this.state, colors, mode, speed});
    });
  }

  public emitToIPCMain(data: any) {
    ipcRenderer.send("event", data);
  }
  public componentDidMount() {
    this.handleEvents();
  }

  public render() {
    return ( <LayoutComponent /> );
  }
}

export default AppComponent;

