import * as React from 'react';
import * as ReactDOM from 'react-dom';
import SectionsComponent from './sections.component';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SectionsComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
