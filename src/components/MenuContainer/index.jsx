import "./style.css";
import Product from "../Product";

export default function MenuContainer({
  total,
  currentSale,
  setCurrentSale,
  handleClick,
  showProducts,
}) {
  const handleRemove = (produto) => {
    setCurrentSale(currentSale.filter((item) => item !== produto));
  };

  return (
    <div className="inicio">
      <Product
        handleClick={handleClick}
        showProducts={showProducts}
        currentSale={currentSale}
      />
      <div className="carrinho">
        <div className="carrinho-propriedades">
          <div className="carrinho-nome">Carrinho de compras</div>
          <div className="carrinho-conteudo">
            {currentSale.length ? (
              <div className="carrinho-produtos">
                {currentSale.map((produto, index) => (
                  <div className="box-produto" key={index}>
                    <div>
                      <img src={produto.img} alt="hamburgueria" />
                    </div>
                    <div className="produto-info">
                      <div className="produto-nome">{produto.name}</div>
                      <div className="produto-categoria">
                        {produto.category}
                      </div>
                    </div>
                    <button onClick={() => handleRemove(produto)}>
                      Remover
                    </button>
                  </div>
                ))}
                <div className="total">
                  <p className="total-p1">Total</p>
                  <p className="total-p2">R$ {total.toFixed(2)}</p>
                </div>
                <button
                  className="total-button"
                  onClick={() => setCurrentSale([])}
                >
                  Remover tudo
                </button>
              </div>
            ) : (
              <div className="carrinho-vazio">
                <p className="carrinho-vazio-p1">Sua sacola está vazia</p>
                <p className="carrinho-vazio-p2">Adicione itens</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
