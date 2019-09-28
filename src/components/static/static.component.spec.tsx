import * as React from 'react';
import * as ReactDOM from 'react-dom';
import StaticComponent from './static.component';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StaticComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
