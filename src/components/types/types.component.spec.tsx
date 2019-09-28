import * as React from 'react';
import * as ReactDOM from 'react-dom';
import TypesComponent from './types.component';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TypesComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
