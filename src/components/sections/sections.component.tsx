import * as React from 'react';
import "./sections.component.sass";
import MainComponent from '../main/main.component';
import TypesComponent from '../types/types.component';
import StaticComponent from '../static/static.component';
import RainbowComponent from '../rainbow/rainbow.component';

class SectionsComponent extends React.Component {
  public state = {
    active: 0
  }

  public handlePageChange = (active: number) => {
    this.setState({...this.state, active});
  }

  public renderSwitch() {
    switch (this.state.active) {
      case 0:
        return <StaticComponent />
      case 1:
        return <RainbowComponent />
      default:
        return <StaticComponent />
    }
  }
  public render() {
    return (
      <div className="sections">
        <TypesComponent active={this.state.active} handlePageChange={this.handlePageChange}/>
        <MainComponent>
          { this.renderSwitch() }
        </MainComponent>
      </div>
    );
  }
}

export default SectionsComponent;

