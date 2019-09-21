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
    ipcRenderer.on("connected", (emitter: any, data:any)=> {
      console.log(data);
    });
    
    try {
      const Cylon = require("cylon");
      Cylon.robot({
        // Change the port to the correct port for your Arduino.
        connections: {
          arduino: { adaptor: 'firmata', port: 'COM4' }
        },
      
        devices: {
          led: { driver: 'led', pin: 11 }
        },
        
        // @ts-ignore
        work (my: any) {
          // @ts-ignore
          every((1).second(), function() {
            my.led.toggle();
          });
        }
      }).start();
    } catch(err) {
      console.log(err)
    }
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

