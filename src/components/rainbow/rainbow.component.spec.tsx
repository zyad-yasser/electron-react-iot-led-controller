import * as React from 'react';
import * as ReactDOM from 'react-dom';
import RainbowComponent from './rainbow.component';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RainbowComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
