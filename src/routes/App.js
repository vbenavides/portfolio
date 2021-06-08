import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
// import GlobalStyle from '../styles/GlobalStyle';

const App = () => {
  return (
    <BrowserRouter>
      {/* <GlobalStyle /> */}
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
