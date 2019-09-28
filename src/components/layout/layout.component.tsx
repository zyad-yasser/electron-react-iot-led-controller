import * as React from 'react';
import TitlebarComponent from '../title-bar/title-bar.component';

class LayoutComponent extends React.Component {
  public render() {
    return (
      <>
        <TitlebarComponent />
        <div>
          {this.props.children}
        </div>
      </>
    );
  }
}

export default LayoutComponent;

