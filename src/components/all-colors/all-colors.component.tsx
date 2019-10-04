import * as React from 'react';
import "./all-colors.component.sass";
import eventEmitter from 'src/helpers/react-events/react-events.helper';

class AllColorsComponent extends React.Component<any> {
  public componentDidMount() {
    const mode = 'All';
    const colors = null;
    eventEmitter.emit('change', {colors, mode});
  }

  public render() {
    return (
      <div className="page all-colors">
        All colors
      </div>
    );
  }
}

export default AllColorsComponent;

