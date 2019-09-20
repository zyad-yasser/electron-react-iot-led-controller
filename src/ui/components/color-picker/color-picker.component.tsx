// @ts-ignore
import ColorPicker from "@radial-color-picker/react-color-picker";
import "@radial-color-picker/react-color-picker/dist/react-color-picker.umd.min.css";
import * as React from "react";
import { hslaToRgb } from "../../helpers/colors/colors.helper";

class ColorPickerComponent extends React.Component {
  public state = {
    hue: 90,
    saturation: 100,
    luminosity: 50,
    alpha: 1,
    red: 0,
    green: 0,
    blue: 0
  };

  public onChange = ({ hue, saturation, luminosity }: any) => {
    const rgb = hslaToRgb({ hue, saturation, luminosity });
    const state = Object.assign(this.state, rgb, { hue, saturation, luminosity });
    this.setState(state);
  };

  public render() {
    return <ColorPicker {...this.state} onChange={this.onChange} />;
  }
}

export default ColorPickerComponent;
