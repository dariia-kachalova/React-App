import React from 'react';
import styles from './App.scss';
import List from '../List/List';


class App extends React.Component {
  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>My first React app</h1>
        <h2 className={styles.subtitle}>Hello world!</h2>
        <List title={['Things to do ', <sup>soon!</sup>]}
        background image ={"https://i.postimg.cc/mkJZ9sQK/pexels-rakicevic-nenad-1274260.jpg"}>
        </List>
      </main>
    )
  }
}

export default App;