import * as React from "react";
import "./music.component.sass";
import eventEmitter from "src/helpers/react-events/react-events.helper";
import { audioInit } from 'src/helpers/audio/audio.helper';

class MusicComponent extends React.Component<any> {
  public onChange = (event: any) => {
    const mode = "Music";
    const colors = {};
    const speed = event.target.value;
    this.setState({ ...this.state, speed });
    eventEmitter.emit("change", { colors, mode, speed });
  };

  public componentDidMount() {
    const mode = "Music";
    const colors = null;
    eventEmitter.emit("change", { colors, mode });
    audioInit();
  }

  public render() {
    return (
      <div className="page music">
        <div className="words">Music mode</div>
      </div>
    );
  }
}

export default MusicComponent;
