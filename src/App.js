import React, {useEffect,useState} from 'react';
import Login from './components/loginPage';
import Page404 from './components/pageNotFound';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';



function App() {
  const [user, setUser] = useState({})
  console.log('user:',user);
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route exact path="/">
          {
            user.id ?
            <Page404 />
            :
            <Redirect to="/login" />
          }
        </Route>
          
        <Route exact path="/login" render={
          routerProps => <Login route={routerProps} setUser={setUser} />
        }/>
          
        
        </Switch>
      </div>
    </Router>
  );
}

export default App;
