import React from 'react';
import Steps from '../../../modules/Steps/Steps';
import useForm from '../../../../hooks/useForm';
import validate from './validate';
import {isEmpty} from 'lodash';

export default function Checkout(props) {
  const gerPersonalInf = () => props.onSubmit(values);

  const {
    values,
    errors,
    handleChange,
    handleSubmit
  } = useForm({
    name: '',
    surname: '',
    phone: '',
    deliveryMethod: 'pickup',
    address: '',
    // checkoutTime: '',
    checkoutPaymentType: 'cash_to_courier'
  }, gerPersonalInf, validate);
  return (
    <form className="checkout">
      <h2>Checkout</h2>
      <Steps
        handleDone={handleSubmit}
      >
        <Steps.Step isValid={!!values.name && !errors.name && !!values.phone && !errors.phone}>
          <div className="inputStep">
            <h3>Step 1: Tell us about yourself</h3>
            <div className="inputContainer">
              <div className="checkoutInput">
                <input
                  id="checkoutName"
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                />
                <label htmlFor="checkoutName">Name</label>
                <span className="checkoutBar">{errors.name}</span>
              </div>
              <div className="checkoutInput">
                <input
                  id="checkoutSurname"
                  type="text"
                  name="surname"
                  value={values.surname}
                  onChange={handleChange}
                />
                <label htmlFor="checkoutSurname">Surname</label>
                <span className="checkoutBar"/>
              </div>
              <div className="checkoutInput">
                <input
                  id="checkoutPhone"
                  type="phone"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                />
                <label htmlFor="checkoutPhone">Phone</label>
                <span className="checkoutBar"/>
              </div>
            </div>
          </div>
        </Steps.Step>
        <Steps.Step
          isValid={values.deliveryMethod === 'courier_delivery' ?
            !!values.address && !errors.address && !!values.checkoutTime && !errors.checkoutTime : true
          }>
          <div className="inputStep">
            <h3>Step 2: Delivery method</h3>
            <div className="checkoutSelect">
              <select
                className="selectText"
                id="checkoutTime"
                name="deliveryMethod"
                value={values.deliveryMethod}
                onChange={handleChange}
              >
                <option value="pickup">Pickup</option>
                <option value="courier_delivery">Courier delivery</option>
              </select>
              <span className="selectHighlight"/>
              <span className="selectBar"/>
            </div>
            {values.deliveryMethod === 'courier_delivery' &&
            (<>
              <div className="inputContainer">
                <div className="checkoutInput">
                  <input
                    id="checkoutAddress"
                    type="text"
                    name="address"
                    value={values.address}
                    onChange={handleChange}
                  />
                  <label htmlFor="checkoutAddress">Address</label>
                  <span className="checkoutBar"/>
                </div>
              </div>
              {/*<div className="checkoutSelect">*/}
              {/*  <select*/}
              {/*    className="selectText"*/}
              {/*    id="checkoutTime"*/}
              {/*    name="checkoutTime"*/}
              {/*    value={values.checkoutTime}*/}
              {/*    onChange={handleChange}*/}
              {/*  >*/}
              {/*    <option/>*/}
              {/*    <option> 4:00 PM - 5:00 PM</option>*/}
              {/*    <option> 5:00 PM - 6:00 PM</option>*/}
              {/*    <option> 6:00 PM - 7:00 PM</option>*/}
              {/*    <option> 8:00 PM - 9:00 PM</option>*/}
              {/*    <option> 9:00 PM - 10:00 PM</option>*/}
              {/*  </select>*/}
              {/*  <span className="selectHighlight"/>*/}
              {/*  <span className="selectBar"/>*/}
              {/*  <label className="selectLabel">Time</label>*/}
              {/*</div>*/}
            </>)}
          </div>
        </Steps.Step>
        <Steps.Step isValid={!!values.name && !!values.phone && isEmpty(errors)}>
          <div className="inputStep">
            <h3>Step 3: Choose a payment method</h3>
            <div className="checkoutSelect">
              <select
                className="selectText"
                id="checkoutPaymentType"
                name="checkoutPaymentType"
                value={values.checkoutPaymentType}
                onChange={handleChange}
              >
                <option value="cash_to_courier"> Сash payment to the courier</option>
              </select>
              <span className="selectHighlight"/>
              <span className="selectBar"/>
              <label className="selectLabel">Payment</label>
            </div>
          </div>
        </Steps.Step>
      </Steps>
    </form>
  );
}

Checkout.propTypes = {};
