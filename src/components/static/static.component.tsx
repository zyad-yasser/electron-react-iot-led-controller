import * as React from 'react';
import "./static.component.sass";
import ColorPickerComponent from '../color-picker/color-picker.component';
import eventEmitter from 'src/helpers/react-events/react-events.helper';

class StaticComponent extends React.Component<any> {
  public onChange(colors: any) {
    const mode = 'Static';
    console.log(colors.red, colors.green, colors.blue)
    eventEmitter.emit('change', {colors, mode});
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

