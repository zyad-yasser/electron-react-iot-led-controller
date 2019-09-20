import * as React from 'react';
import * as ReactDOM from 'react-dom';
import AppComponent from './app.component';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <AppComponent />,
  document.getElementById('root') as HTMLElement
);

serviceWorker.unregister();
