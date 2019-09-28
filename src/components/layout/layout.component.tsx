import * as React from "react";
import TitlebarComponent from "../title-bar/title-bar.component";
import DevicesComponent from "../devices/devices.component";
import "./layout.component.sass";
import SectionsComponent from '../sections/sections.component';

class LayoutComponent extends React.Component {
  public render() {
    return (
      <div className="layout">
        <div className="background">
          <img width="100%" height="100%" src="images/bk.png" />
        </div>
        <div className="content">
          <TitlebarComponent />
          <DevicesComponent />
          <SectionsComponent />
        </div>
      </div>
    );
  }
}

export default LayoutComponent;
