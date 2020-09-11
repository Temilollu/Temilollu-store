import React, { useEffect } from 'react';
import { connect } from 'react-redux'


import  Header from './Components/Header';
import Homepage from './Components/Homepage'

import { isFetchingAsync }from './redux/shop/shop.action'
import './App.css';


function App(props) {
  const { shopData } = props
  useEffect(() => {
   shopData()
  }, [])

  return (
    <div>
       <Header/>
      <Homepage/> 
      
    </div>
  );
}

const mapDispatchToDrops = dispatch => ({
  shopData : () => dispatch(isFetchingAsync()) 
})

export default connect(null, mapDispatchToDrops)(App);
