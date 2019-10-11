import * as React from 'react';
import "./sections.component.sass";
import MainComponent from '../main/main.component';
import TypesComponent from '../types/types.component';
import StaticComponent from '../static/static.component';
import RainbowComponent from '../rainbow/rainbow.component';
import ActionsComponent from '../actions/actions.component';
import AllColorsComponent from '../all-colors/all-colors.component';
import MusicComponent from '../music/music.component';
import eventEmitter from 'src/helpers/react-events/react-events.helper';

class SectionsComponent extends React.Component<any> {
  public state = {
    active: 0,
    colors: {red: 255, green: 255, blue: 255},
    mode: "Static",
    isOn: true,
    isConnected: true,
  }

  public handlePageChange = (active: number) => {
    this.setState({...this.state, active});
  }

  public renderSwitch() {
    switch (this.state.active) {
      case 0:
        return <AllColorsComponent />
      case 1:
        return <StaticComponent />
      case 2:
        return <RainbowComponent />
      case 3:
        return <MusicComponent />
      default:
        return <StaticComponent />
    }
  }
  public render() {
    const { isOn, isConnected, active, colors } = this.state;
    return (
      <div className="sections">
        <div className={isOn && isConnected ? "none" : "hider"} />
        <TypesComponent active={active} handlePageChange={this.handlePageChange}/>
        <MainComponent mode={colors}>
          { this.renderSwitch() }
        </MainComponent>
        <ActionsComponent />
      </div>
    );
  }

  public attachEvents() {
    eventEmitter.on("off", () => {
      const isOn = false;
      this.setState({...this.state, isOn});
    });

    eventEmitter.on("disconnected", () => {
      const isConnected = false;
      this.setState({...this.state, isConnected});
    });

    eventEmitter.on("connected", () => {
      const isConnected = true;
      this.setState({...this.state, isConnected});
    });

    eventEmitter.on("default", () => {
      this.handlePageChange(0);
    });

    eventEmitter.on("on", () => {
      const isOn = true;
      this.setState({...this.state, isOn});
    });
  }

  public componentDidMount() {
    this.attachEvents();
  }
}

export default SectionsComponent;

