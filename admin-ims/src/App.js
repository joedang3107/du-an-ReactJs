import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import LoginPage  from './views/pages/login/LoginPage';
import { DefaultLayout } from './layouts/DefaultLayout';
import { PrivateRoute } from './redux/routers/PrivateRoute';

import './App.css';
import routers from './routers';


function App() {
  return (
    <Router>
    <Switch>
      <Route path="/login">
          <LoginPage />
      </Route>
      {/* <Route exact path="/page404">
        <Page404 />
      </Route> */}
      <PrivateRoute path="/">
        <DefaultLayout routers={routers}/>
      </PrivateRoute>
    </Switch>
  </Router>
  );
}

export default App;
