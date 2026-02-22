import React, { useContext } from "react";
import { BasketContext } from "./MainBasket.jsx";

function CartBasket() {
  const { basket, setBasket } = useContext(BasketContext);

  const addItem = (item) => {
    setBasket((prevBasket) => {
      // Проверяем, есть ли товар в корзине
      const existingItem = prevBasket.find((i) => i.id === item.id);
      if (existingItem) {
        // Если есть, увеличиваем количество
        return prevBasket.map((i) =>
          i.id === item.id ? { ...i, count: i.count + 1 } : i
        );
      } else {
        // Если нет — добавляем с count = 1
        return [...prevBasket, { ...item, count: 1 }];
      }
    });
  };

  // Подсчёт общей суммы
  const totalSum = basket.reduce((sum, item) => sum + item.price * item.count, 0);

  return (
    <div>
      <h3>Корзина: {basket.length} товаров</h3>

      {/* Список товаров */}
      <ul>
        {basket.map((item) => (
          <li key={item.id}>
            {item.name} — {item.price} $ × {item.count} шт. = {item.price * item.count} $
          </li>
        ))}
      </ul>

      {/* Суммарная цена */}
      <h4>Общая сумма: {totalSum} $</h4>

      {/* Пример товаров */}
      <div className="card" style={{ width: "18rem", marginBottom: "10px" }}>
        <div className="card-body">
          <h5 className="card-title">Товар 1</h5>
          <p className="card-text">Описание товара 1</p>
          <button
            className="btn btn-primary"
            onClick={() => addItem({ id: 1, name: "Товар 1", price: 300 })}
          >
            Добавить
          </button>
        </div>
      </div>

      <div className="card" style={{ width: "18rem", marginBottom: "10px" }}>
        <div className="card-body">
          <h5 className="card-title">Товар 2</h5>
          <p className="card-text">Описание товара 2</p>
          <button
            className="btn btn-primary"
            onClick={() => addItem({ id: 2, name: "Товар 2", price: 50 })}
          >
            Добавить
          </button>
        </div>
      </div>

      <div className="card" style={{ width: "18rem", marginBottom: "10px" }}>
        <div className="card-body">
          <h5 className="card-title">Товар 3</h5>
          <p className="card-text">Описание товара 3</p>
          <button
            className="btn btn-primary"
            onClick={() => addItem({ id: 3, name: "Товар 3", price: 100 })}
          >
            Добавить
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartBasket;