import "./App.css";
import { useState } from "react";
import MenuContainer from "./components/MenuContainer";

function App() {

  const [inputValue, setInputValue] = useState("");
  const [currentSale, setCurrentSale] = useState([]);
  const total = currentSale.reduce((acc, item) => acc + item.price, 0);

  const [products, setProducts] = useState([
    { id: 1, name: 'Hambúrguer', category: 'Sanduíches', price: 14.00, img: 'https://i.ibb.co/fpVHnZL/hamburguer.png' },
    { id: 2, name: 'X-Burguer', category: 'Sanduíches', price: 16.00, img: 'https://i.ibb.co/djbw6LV/x-burgue.png' },
    { id: 3, name: 'Big Kenzie', category: 'Sanduíches', price: 18.00, img: 'https://i.ibb.co/FYBKCwn/big-kenzie.png' },
    { id: 4, name: 'Fanta Guaraná', category: 'Bebidas', price: 5.00, img: 'https://i.ibb.co/cCjqmPM/fanta-guarana.png' },
    { id: 5, name: 'Coca-Cola', category: 'Bebidas', price: 7.00, img: 'https://i.ibb.co/fxCGP7k/coca-cola.png' },
    { id: 6, name: 'MilkShake', category: 'Bebidas', price: 10.00, img: 'https://i.ibb.co/QNb3DJJ/milkshake-ovomaltine.png' },
  ]);

  function showProducts() {

    return inputValue === "" ? (products) : (products.filter((item) =>
      item.category
        .toLowerCase()
        .split()
        .join()
        .includes(
          inputValue
            .toLowerCase()
            .split()
            .join()
        )
    )
    );
  };

  const handleClick = (product) => {
    currentSale.every((item) => item.id !== product.id) &&
      setCurrentSale([...currentSale, product]);
  };

  return (
    <div className="App">
      <header className="header">
        <div className="logo">
          <h1>Burguer</h1>
          <h2>Kenzie</h2>
        </div>
        <div className="pesquisa">
          <div className="pesquisa-input">
            <input
              type="text"
              placeholder="Digitar Pesquisa"
              onChange={(event) => setInputValue(event.target.value)}
            />
            <button className="pesquisa-botao" onClick={console.log(inputValue)}>
              Pesquisar
            </button>
          </div>
        </div>
      </header>

      <main className="App-main">
        <MenuContainer
          total={total}
          currentSale={currentSale}
          setCurrentSale={setCurrentSale}
          handleClick={handleClick}
          showProducts={showProducts}
        />
      </main>
    </div>
  );
}

export default App;
