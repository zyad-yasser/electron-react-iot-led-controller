import * as React from 'react';
import * as ReactDOM from 'react-dom';
import AppComponent from './app.component';
import * as serviceWorker from './serviceWorker';
const Readable = require('stream').Readable  
const util = require('util')  

util.inherits(MyStream, Readable)  
function MyStream(opt: any) {  
  Readable.call(this, opt)
}
MyStream.prototype._read = () => {};
// @ts-ignore
process.__defineGetter__('stdin', () => {
  // @ts-ignore
  if (process.__stdin) {
    // @ts-ignore
    return process.__stdin
  }
  // @ts-ignore
  process.__stdin = new MyStream();
  // @ts-ignore
  return process.__stdin
})

ReactDOM.render(
  <AppComponent />,
  document.getElementById('root') as HTMLElement
);

serviceWorker.unregister();
