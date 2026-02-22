import React, { createContext, useState } from "react";

const BasketContext = createContext([]);

function MainBasket({ children }) {
  const [basket, setBasket] = useState([]);

  return (
    <BasketContext.Provider value={{ basket, setBasket }}>
      {children}
    </BasketContext.Provider>
  );
}

export default MainBasket;
export { BasketContext };