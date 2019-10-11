import * as React from 'react';
import "./title-bar.component.sass";
const remote = require('electron').remote;

class TitlebarComponent extends React.Component {
  public render() {
    return (
      <div className="titleBar">
        <div className="overlay" />
        <div className="logo">
          <img src="images/iot-logo.png" height="16px" />
          <div className="title">
            RGB led strip controller
          </div>
        </div>
        <div className="buttons">
          <button className="btn btn-refresh" onClick={this.resart}>
            <img height="12px" src="icons/refresh.png" />
          </button>
          <button className="btn btn-exit" onClick={this.closeWindow}>
            <img height="12px" src="icons/close.png" />
          </button>
        </div>
      </div>
    );
  }

  public closeWindow() {
    const window = remote.getCurrentWindow();
    window.close();
  }

  public resart() {
    const app = remote.app;
    app.relaunch();
    app.quit();
  }
}

export default TitlebarComponent;

