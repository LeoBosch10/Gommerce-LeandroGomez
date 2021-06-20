import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import MenuBar from './Components/Navbar/Menu';
import ItemListContainer from './Components/Container/ItemListContainer';

class App extends React.Component {
  render() {
    return (
<div className = 'container'> 
<Navbar/>
   <MenuBar/>
   <ItemListContainer/>
  </div>
    ); 

  }
}
export default App; 