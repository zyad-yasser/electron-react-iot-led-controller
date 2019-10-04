import * as React from 'react';
import "./rainbow.component.sass";
import eventEmitter from 'src/helpers/react-events/react-events.helper';

class RainbowComponent extends React.Component<any> {
  public onChange(colors: any) {
    const mode = 'Rainbow';
    eventEmitter.emit('change', {colors, mode});
  }
  public render() {
    return (
      <div className="page rainbow">
        rainbow
        <button onClick={this.onChange}>Change</button>
      </div>
    );
  }
}

export default RainbowComponent;

