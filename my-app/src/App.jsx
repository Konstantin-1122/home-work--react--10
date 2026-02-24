import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MainBasket from "./Component/MainBasket";
import CartBasket from "./Component/CartBasket";
import CountryTable from "./Component/CountryTable";
import HomeWorckAlbums from "./Component/HomeWorckAlbums";
import Header from "./Component/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CountryPage from "./pages/CountryPage";

function App() {
  const [value, setValue] = useState(0);

  const handleSliderChange = (newValue) => {
    setValue(newValue);
  };

  const [selectedCountry, setSelectedCountry] = useState([]);
  function selectCountry(country) {
    selectedCountry((selectCountry) => [...selectCountry, country]);
  }
  function removeCountry(indexRemove) {
    setSelectedCountry((country) =>
      country.filter((value, index) => index !== indexRemove),
    );
  }

  return (
    <>
      <div className="container mt-5">
          {/*<Header></Header>*/}

        {/* <Router>
         <Routes> 
         <Route path="/" element={<HomePage></HomePage>}> 
         <Route path="/about" element={<AboutPage></AboutPage>}>
         </Route> <Route path="/counry" element={<CountryPage>
         </CountryPage>}></Route> </Route> </Routes> 
        </Router>*/}
         {/*<MainBasket>
          <CartBasket />
        </MainBasket>
        <h1> выбранные </h1>
        <ul className="list-group">
          <li class="list-group-item">And a fifth one</li>
          {selectedCountry.map((country, index) => {
            return (
              <li key={index} className="list-group-item">
                {country.name.common}
                <button
                  className="btn btn-danger"
                  onClick={() => removeCountry(index)}
                >
                  remove country
                </button>
              </li>
            );
          })}
        </ul>*/}
        <CountryTable
          title="taблица"
          onSelectContry={selectCountry}
        ></CountryTable>

        <HomeWorckAlbums title="table"></HomeWorckAlbums>
      </div>
    </>
  );
}

export default App;
