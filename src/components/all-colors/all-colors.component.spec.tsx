import * as React from 'react';
import * as ReactDOM from 'react-dom';
import AllColorsComponent from './all-colors.component';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AllColorsComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
