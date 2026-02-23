import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MainBasket from "./Component/MainBasket";
import CartBasket from "./Component/CartBasket";
import CountryTable from "./Component/CountryTable";
import HomeWorckAlbums from "./Component/HomeWorckAlbums";

function App() {
  const [value, setValue] = useState(0);

  const handleSliderChange = (newValue) => {
    setValue(newValue);
  };

  {/*const [selectedCountry, setSelectedCountry] = useState([]);
  function selectCountry(country) {
    selectedCountry((selectCountry) => [...selectCountry, country]);
  }
  function removeCountry(indexRemove) {
    setSelectedCountry((country) =>
      country.filter((value, index) => index !== indexRemove),
    );
  }*/}

  function remov(id){
     
  }
  return (
    <>
      <div className="container mt-5">
        {/*<MainBasket>
          <CartBasket />
        </MainBasket>
        <h1> выбранные </h1>
        <ul className="list-group">
          {/*<li class="list-group-item">And a fifth one</li>}
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
        </ul>
        <CountryTable
          title="taблица"
          onSelectContry={selectCountry}
        ></CountryTable>*/}


        <HomeWorckAlbums title='table'></HomeWorckAlbums>
      </div>
    </>
  );
}

export default App;
