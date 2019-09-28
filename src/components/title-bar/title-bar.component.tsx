import * as React from 'react';
import "./title-bar.component.sass";

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
          <button className="btn btn-refresh">
            <img height="12px" src="icons/refresh.png" />
          </button>
          <button className="btn btn-exit">
            <img height="12px" src="icons/close.png" />
          </button>
        </div>
      </div>
    );
  }
}

export default TitlebarComponent;

