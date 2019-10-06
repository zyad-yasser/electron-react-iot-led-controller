import * as React from 'react';
import "./rainbow.component.sass";
import eventEmitter from 'src/helpers/react-events/react-events.helper';

class RainbowComponent extends React.Component<any> {
  public state = {
    speed: 2
  }
  public onChange = (event: any) => {
    const mode = 'Rainbow';
    const colors = {};
    const speed = event.target.value;
    this.setState({...this.state, speed})
    eventEmitter.emit('change', {colors, mode, speed});
  }
  public render() {
    return (
      <div className="page rainbow">
        <div className="main-text">
          Speed: 
        </div>
        <input onChange={this.onChange} type="range" min="2" max="60" value={this.state.speed} className="slider"/>
        <div className="speed">
          <div>
            <div className="digits">
              {this.state.speed} 
            </div>
            seconds / cycle
          </div>
        </div>
      </div>
    );
  }
}

export default RainbowComponent;

