import React from 'react';
import {Switch, Route} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.components';
import SignInSignOut from './pages/sign-in-sign-out/sign-in-sign-out.component'
import {auth, createUserProfileDocument} from './assets/firebase/firebase.utils';

import './App.css';


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currentUser: null,
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

         userRef.onSnapshot(snapShot => {
          this.setState({
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            })
        })
      }

      this.setState({currentUser: userAuth});
    });
  }


  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div className="App">
        <Header currentUser = {this.state.currentUser} />
        <Switch>
          <Route exact path = '/' component = {HomePage}/>
          <Route path = '/shop' component = {ShopPage}/>
          <Route path = '/sign-in-sign-out' component = {SignInSignOut} />
        </Switch>
      </div>
    );
  }
}

export default App;
