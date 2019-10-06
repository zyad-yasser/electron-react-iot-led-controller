import * as React from 'react';
import "./static.component.sass";
import ColorPickerComponent from '../color-picker/color-picker.component';
import eventEmitter from 'src/helpers/react-events/react-events.helper';

class StaticComponent extends React.Component<any> {

  public changer = (colors: any) => {
    const mode = 'Static';
    eventEmitter.emit('change', {colors, mode});
  }

  public onChange = (colors: any) => {
    this.changer(colors);
  }

  public render() {
    return (
      <div className="page static">
        <ColorPickerComponent onChange={this.onChange}/>
      </div>
    );
  }
}

export default StaticComponent;

