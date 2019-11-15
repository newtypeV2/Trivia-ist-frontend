import React, {useEffect,useState} from 'react';
import Login from './components/loginPage';
import Page404 from './components/pageNotFound';
import './App.css';
import {Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { TOKEN_URL } from './constants';



function App(props) {
  const [user, setUser] = useState({})
  console.log('user:',user);

  useEffect(() => {
    //This is for checking if someone is already logged in via checking the localStorage token.
    if(localStorage.getItem('t_token') && user.id === undefined){
      //If token exist, do a post fetch call to decode the userinfo
      fetch(TOKEN_URL,{
        headers: {
          'Content-Type': 'application/json',
          'Authentication': 'Bearer ' + localStorage.getItem('t_token')
        }
      })
      .then(res => res.json())
      .then(data => {
        setUser(data);
        props.history.push('/')
      })
    }
  })

  return (
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
  );
}

export default withRouter(App);
