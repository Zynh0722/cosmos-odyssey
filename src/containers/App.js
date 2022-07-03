import React from 'react';
import Footer from '../components/Footer';
import Main from '../components/Main';
import Planets from '../components/Planets';
import Reservations from '../components/Reservations';
import {Routes,Route} from 'react-router-dom';
import Title from '../components/Title';
import './app.css';

function App() {
  return (
    <div className="App">
      <Title />

      <Routes>
        <Route exact path="/" 
          element={<Main />} />

        <Route exact path="/planets" 
          element={<Planets />} />
          
        <Route exact path="/reservations" 
          element={<Reservations />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
