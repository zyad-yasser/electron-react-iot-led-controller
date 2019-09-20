const { ipcRenderer } = require('electron');
import * as React from 'react';
import * as styles from './app.component.sass';
import LayoutComponent from './components/layout/layout.component';
import ColorPickerComponent from './components/color-picker/color-picker.component';

class AppComponent extends React.Component {
  public emitToIPCMain() {
    // Events emitting
    const arg ="your arg";
    ipcRenderer.send("event", arg);
  }
  public componentDidMount() {
    // Attach event receivers
    ipcRenderer.on("event", (data: any)=> {
      console.log(data);
    });
  }
  public render() {
    return (
      <>
        <div className={styles.app}>app component works !</div>
        <LayoutComponent />
        <ColorPickerComponent />
      </>
    );
  }
}

export default AppComponent;

