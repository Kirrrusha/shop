import React from 'react';
import PropTypes from 'prop-types';
import Checkout from './Checkout';

export default function Cart() {
  const products = []; //TODO: add redux
  let total = 0;
  const rows = products.map(({name, quantity, imgUrl, price, info}) => {
    const infoRows = Object.entries(info).map(([key, value]) => <p key={key}>{`${key}: ${value}`}</p>);
    total += price * quantity;
    return (
      <div className="productCard row" key={name}>
        <div className="info col">
          <img className="img" src={imgUrl} alt={name}/>
          <div className="text">
            {name}
            {infoRows}
          </div>
        </div>
        <div className="quantity col">{quantity}</div>
        <div className="price col">{price}</div>
        <div className="total col">{price * quantity}</div>
      </div>
    );
  });

  return (
    <div className="cartContainer">
      <h1>Cart</h1>
      <div className="tableWrapper">
        <div className="productsHeader row">
          <div className="info col">ORDER SUMMARY</div>
          <div className="quantity col">QUANTITY</div>
          <div className="price col">PRICE</div>
          <div className="total col">TOTAL</div>
        </div>
        <div className="productsContainer">
          {rows}
        </div>
        <div className="productsTotal row">
          <div className="allTotal">{total}</div>
        </div>
      </div>
      <Checkout/>
    </div>
  );
}

Cart.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string,
      info: PropTypes.object,
      price: PropTypes.number,
      imgUrl: PropTypes.string,
      quantity: PropTypes.number
    })
  )
};
