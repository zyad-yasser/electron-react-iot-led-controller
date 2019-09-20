import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ColorPickerComponent from './color-picker.component';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ColorPickerComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
