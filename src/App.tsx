const { ipcRenderer } = require('electron');
import * as React from 'react';
import * as styles from './App.sass';
import logo from './logo.svg';

class App extends React.Component {
  public emitMe() {
    const arg ="ZKR";
    ipcRenderer.send("btnclick", arg);
  }
  public render() {
    return (
      <div className={styles.app}>
        <header className={styles.header}>
          <img src={logo} className={styles.logo} alt="logo" />
          <p>
            AZOZZA Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <button onClick={this.emitMe}>
            Click a aba to emit a aba !
          </button>
          <a
            className={styles.link}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;

