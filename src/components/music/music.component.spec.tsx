import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MusicComponent from './music.component';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MusicComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
