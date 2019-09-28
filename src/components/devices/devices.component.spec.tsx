import * as React from 'react';
import * as ReactDOM from 'react-dom';
import DevicesComponent from './devices.component';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DevicesComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
