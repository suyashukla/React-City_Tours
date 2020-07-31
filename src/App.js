import React, {Component} from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.scss';
import TourList from './components/TourList/index';

class App extends Component {
  render(){
    return (
      <main>
      <Navbar />
      <TourList/>
    </main>
    )
    
  }
}

export default App;
