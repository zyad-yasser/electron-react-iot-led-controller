import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ActionsComponent from './actions.component';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ActionsComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
