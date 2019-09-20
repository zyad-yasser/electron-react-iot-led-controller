import * as React from 'react';

class LayoutComponent extends React.Component {
  public render() {
    return (
      <div>
        Hello from layout
        {this.props.children}
      </div>
    );
  }
}

export default LayoutComponent;

