import './App.css';
import Header from './Header';
import Home from './Home';
import {Routes, Route} from 'react-router-dom'
import Checkout from './Checkout';
import Login from './Login';

import { useStateValue } from './StateProvider';
import React, { useEffect } from 'react';
import Footer from './Footer';
import auth from './firebase';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders';

const promise = loadStripe(
  'pk_test_51KUgOCAetY2YJrJOprrj4brlXU8UK58mw7k9Q7h9KO4zf8dpccZZFVMIbLEfIntIKjdhZifEyywSqjs8pp8gHICv00zUktRyxS'
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, []);

  return (
    
    <div className="App">
      <Routes>
          <Route path="/" element={<><Header />
            <Home /></>} />
          <Route path="/checkout" element={<><Header />
          <Checkout /></>} />
        <Route path="/login" element={<Login />} />
        <Route path="/payment" element={<Elements stripe={promise}><Header /><Payment/></Elements>} />
        <Route path="/orders" element={<><Header /><Orders />  </>} />
          
          
          
      </Routes>
      <Footer/>
      </div>
    
  );
}

export default App;
