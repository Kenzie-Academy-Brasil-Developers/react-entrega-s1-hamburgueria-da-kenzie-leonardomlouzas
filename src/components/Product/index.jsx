import "./style.css";
export default function Product({ handleClick, showProducts }) {
  return (
    <div>
      <div className="produtos">
        {showProducts().map((produto, index) => (
          <div className="produto" key={index}>
            <div className="produto-img">
              <img src={produto.img} alt="imagem do produto" />
            </div>
            <div className="produto-info">
              <div className="produto-nome">{produto.name}</div>
              <div className="produto-categoria">{produto.category}</div>
              <div className="produto-valor">R$ {produto.price.toFixed(2)}</div>
              <button onClick={() => handleClick(produto)}>Adicionar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
