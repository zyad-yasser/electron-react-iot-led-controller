import * as React from 'react';
import "./sections.component.sass";
import MainComponent from '../main/main.component';
import TypesComponent from '../types/types.component';

class SectionsComponent extends React.Component {
  public render() {
    return (
      <div className="sections">
        <TypesComponent />
        <MainComponent />
      </div>
    );
  }
}

export default SectionsComponent;

