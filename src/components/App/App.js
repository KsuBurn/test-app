import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {WrappedInputData} from '../InputData/InputData';
import User from '../User/User';

import styles from './App.module.css';

const App = () => (
  <Router>
    <Link to='/new'>
      <button className={styles.start_button}>
        Нажми, чтобы начать
      </button>
    </Link>
    <div>
      <Route path='/new' component={WrappedInputData}/>
      <Route path='/details' component={User}/>
    </div>
  </Router>
);

export default App;