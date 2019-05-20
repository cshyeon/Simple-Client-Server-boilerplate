import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { SiteHeader } from './components';
import { Home } from './pages';

import './App.scss';

function App() {
  return (<BrowserRouter>
    <div className="App">
      <SiteHeader />
      <div className="site-content">
        <Route exact path="/" component={Home} />

        {/* <Button onClick={() => alert('btn clicked!')} >btn</Button> */}
      </div>
    </div>
  </BrowserRouter>);
}

export default App;
