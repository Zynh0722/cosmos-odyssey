import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Main from '../components/Main';
import Planets from '../components/Planets';
import Reservations from '../components/Reservations';
import { Routes, Route } from 'react-router-dom';
import Pricelist from '../components/Pricelist';
import './app.css';

function App() {

  const [pricelist, setPricelist] = useState([]);
  const [fromPlanet, setFromPlanet] = useState();
  const [toPlanet, setToPlanet] = useState();
  const [pricelistId, setPricelistId] = useState();
  const [reservations, setReservations] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/pricelists")
      .then(res => res.json())
      .then(data => {
        setPricelist(data)
        setPricelistId(data.id)
      });

    fetch("http://localhost:5000/reservations/getall")
      .then(res => res.json())
      .then(data => setReservations(data));
  }, []);

  return (
    <div className="App">

      <Routes>
        <Route exact path="/"
          element={<Main />} />

        <Route exact path="/planets"
          element={<Planets
            fromPlanet={fromPlanet}
            toPlanet={toPlanet}
            setFromPlanet={setFromPlanet}
            setToPlanet={setToPlanet} />} />

        <Route exact path="/reservations"
          element={<Reservations
            reservations={reservations} />} />

        <Route exact path="/pricelist"
          element={<Pricelist
            fromPlanet={fromPlanet}
            toPlanet={toPlanet}
            leg={
              pricelist.legs?.filter((leg) => leg.routeInfo.from.name === fromPlanet && leg.routeInfo.to.name === toPlanet)[0]
            }
            pricelistId={pricelistId} />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
