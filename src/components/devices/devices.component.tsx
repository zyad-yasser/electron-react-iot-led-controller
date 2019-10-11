import * as React from 'react';
import "./devices.component.sass";
import { serialPortConfig } from 'src/constants';
import eventEmitter from 'src/helpers/react-events/react-events.helper';

class DevicesComponent extends React.Component {
  public state = {
    online: false,
    isOn: true
  }
  public render() {
    const { isOn, online } = this.state;
    return (
      <div className="devices">
        <div className="content">
          <div className="left">
            <img src="images/strip.png" height="40px" />
            <div className="info">
              Device: Arduino RGB led strip ({`${serialPortConfig.idVendor}/${serialPortConfig.idProduct}`})<br />
              Status: <span className={online ? 'online': 'offline'}>{online ? 'Online': 'Offline'}</span>
            </div>
          </div>
          <div className="right">
            {
              // @ts-ignore
              <button className={isOn ? "switch on" : "switch"} disabled={online ? '' : 'disabled'} onClick={this.toggleLight}>
                <img src="icons/switch.png" height="20px"/>
              </button>
            }
          </div>
        </div>
      </div>
    );
  }

  public toggleLight = () => {
    let { isOn } = this.state;
    if (isOn) {
      eventEmitter.emit("off");
      isOn = false;
    } else {
      eventEmitter.emit("on");
      isOn = true;
    }
    this.setState({...this.state, isOn});
  }

  public attachEvents() {
    eventEmitter.on('connected', () => {
      const online = true;
      this.setState({...this.state, online})
    });

    eventEmitter.on('off', () => {
      const isOn = false;
      this.setState({...this.state, isOn})
    });

    eventEmitter.on('on', () => {
      const isOn = true;
      this.setState({...this.state, isOn})
    });

    eventEmitter.on('disconnected', () => {
      const online = false;
      this.setState({...this.state, online})
    });
  }

  public componentDidMount() {
    this.attachEvents();
  }
}

export default DevicesComponent;

