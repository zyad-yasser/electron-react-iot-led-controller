import * as React from "react";

class MainComponent extends React.Component<any> {
  public render() {
    return (
      <div className="main">
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default MainComponent;
