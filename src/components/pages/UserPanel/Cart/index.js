import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Checkout from './Checkout';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCheckout, removeProductInOrder} from '../../../../redux/modules/checkout';

export default function Cart() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.checkout.list);
  let total = 0;
  const [confirm, setConfirm] = useState(false);

  const createCheckout = (values) => {
    dispatch(fetchCheckout({
      ...values, checkout: products
    }))
    setConfirm(false);
  }

  const rows = !!products.length && products.map(({id, name, quantity, imgUrl, price}) => {
    // const infoRows = Object.entries(info).map(([key, value]) => <p key={key}>{`${key}: ${value}`}</p>);
    total += price * quantity;
    return (
      <div className="productCard row" key={name}>
        <div className="info col">
          {/*<img className="img" src={imgUrl} alt={name}/>*/}
          <div className="text">
            {name}
            {/*{infoRows}*/}
          </div>
        </div>
        <div className="quantity col">{quantity}</div>
        <div className="price col">{price}</div>
        <div className="total col">{price * quantity}</div>
        <div
          className="col"
          onClick={() => dispatch(removeProductInOrder({id, quantity, total: price * quantity}))}>Remove</div>
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
          <div className="allTotal">{!!total && total}</div>
        </div>
      </div>
      {!!products.length && <button className="stepButton" onClick={() => setConfirm(true)}>Confirm</button>}
      {confirm && <Checkout onSubmit={createCheckout}/>}
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
