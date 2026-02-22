import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainBasket from './Component/MainBasket'
import CartBasket from './Component/CartBasket'

function App() {
   const [value, setValue] = useState(0);

  const handleSliderChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <div className="container mt-5">
     {/* <h2>Значение: {value}</h2>
      <Range onSliderChange={handleSliderChange} />*/} 

      <MainBasket>
        <CartBasket />
      </MainBasket>
    </div>
      
    </>
  )
}

export default App
