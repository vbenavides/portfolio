import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import pdf from '../components/pdf';
import Home from '../pages/Home';
// import GlobalStyle from '../styles/GlobalStyle';

const App = () => {
  return (
    <BrowserRouter>
      {/* <GlobalStyle /> */}
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/resume.pdf' component={pdf} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
