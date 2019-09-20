import * as React from 'react';
import * as ReactDOM from 'react-dom';
import LayoutComponent from './layout.component';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LayoutComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
