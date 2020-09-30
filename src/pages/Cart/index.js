import React, { useState } from 'react';

import  products  from '../../services/api.json';

import { Container

} from './styles';

function Cart() {

  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }


  return (
    <>
      <Container>

        <div className="cart">
          <div>
            <div className="header"><p> Meu carrinho</p></div>
            <hr/>
            <div className="content">
              { products.items.map(product => {
                return(
                  <div className="product" key={product.id}>
                    <div className="image">
                      <img src={product.imageUrl} alt=""/>
                    </div>
                    <div className="infos">
                      <p>{product.name}</p>
                      <span>R$ {product.price}</span>
                      <p>R$ {product.sellingPrice}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="footer">
            <hr/>
            <div className="total">
              <div>
                <h4>Total</h4>
                <h4>R$ {products.value}</h4>
              </div>
              { products.value > 1000 && (
                  <div className="discount">
                    <p>Parabéns, sua compra tem frete grátis !</p>
                  </div>
                )
              }
            </div>
            <hr/>
            
            <button onClick={() => { onSubmit() }}>
            {isLoading ? "Finalizando..." : "Finalizar compra"}
            </button>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Cart;