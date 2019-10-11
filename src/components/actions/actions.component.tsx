import * as React from 'react';
import "./actions.component.sass";
import eventEmitter from '../../helpers/react-events/react-events.helper';

class ActionsComponent extends React.Component<any> {
  public state = {
    changed: false
  }

  public handleEvents() {
    eventEmitter.on('change', () => {
      const changed = true;
      this.setState({...this.state, changed})
    });
  }

  public setApply = () => {
    eventEmitter.emit("apply");
    const changed = false;
    this.setState({...this.state, changed})
  }

  public setDefault = () => {
    eventEmitter.emit("default");
    setTimeout(() => {
      const changed = false;
      this.setState({...this.state, changed})
    }, 0);
  }

  public render() {
    return (
      <div className="actions">
        <button className="btn-action default" onClick={this.setDefault}>Default</button>
        {
          // @ts-ignore
          <button className="btn-action apply" onClick={this.setApply} disabled={!this.state.changed ? 'disabled' : ''}>Apply</button>
        }
      </div>
    );
  }

  public componentDidMount() {
    this.handleEvents();
  }
}

export default ActionsComponent;
