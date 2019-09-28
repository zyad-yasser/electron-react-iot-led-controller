import * as React from 'react';
import * as ReactDOM from 'react-dom';
import TitlebarComponent from './title-bar.component';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TitlebarComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
