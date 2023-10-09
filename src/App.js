import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { useDispatch, useSelector } from 'react-redux';
import { auth,onAuthStateChanged } from './firebase';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import {login,logout, selectUser} from './features/userSlice'

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        // console.log(user);
        dispatch(login({
          uid:user.uid,
          email:user.email,
        }))
      } else {
        // User is signed out
        // ...
        dispatch(logout());
      }
    });
    return unsubscribe;
  },[dispatch]);

  return (
    <div className="App">
      <Router>
          {!user ? (
            <LoginScreen/>
          ):
          <Routes>
            <Route exact path="/"  element= {<HomeScreen />}>
            </Route>
            <Route exact path="/profile"  element= {<ProfileScreen />}>
            </Route>
         </Routes>
          }

      </Router>
    </div>
  );
}

export default App;
