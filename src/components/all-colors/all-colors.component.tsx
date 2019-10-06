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
        <div>
        <div className="main-logo">
          <img src="images/logo-big.png" width="300px" height="300px" />
        </div>
        <div className="text-w">Default mode with all colors</div>
        </div>
      </div>
    );
  }
}

export default AllColorsComponent;

