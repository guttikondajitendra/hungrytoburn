import React , {Component} from 'react';
import '../containers/Rest.css';
import './App.css';

import Particles from 'react-particles-js';
import RestaurantContainer from '../containers/ContainsRest';



const particlesoptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
  
    }
  }
}
}
class  App extends Component   {
 
  render() {

    return (
    <div className="App">
      <Particles className='particles'
        params={particlesoptions} />
    
        <header  className="App-header">
          <h1 className="App-title">Carve For Food Find Near by  Restaurants </h1>
        </header>
     <RestaurantContainer />
  </div>
    );
    }
  }
   
export default App;
