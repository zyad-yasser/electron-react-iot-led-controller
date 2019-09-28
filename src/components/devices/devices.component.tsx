import * as React from 'react';
import "./devices.component.sass";
import { serialPortConfig } from 'src/constants';

class DevicesComponent extends React.Component {
  public state = {
    online: false
  }
  public render() {
    return (
      <div className="devices">
        <div className="content">
          <div className="left">
            <img src="images/strip.png" height="40px" />
            <div className="info">
              Device: Arduino RGB led strip ({`${serialPortConfig.idVendor}/${serialPortConfig.idProduct}`})<br />
              Status: <span className={this.state.online ? 'online': 'offline'}>{this.state.online ? 'Online': 'Offline'}</span>
            </div>
          </div>
          <div className="right">
            {
              // @ts-ignore
              <button className="switch" disabled={this.state.online ? '' : 'disabled'}>
                <img src="icons/switch.png" height="20px"/>
              </button>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default DevicesComponent;

