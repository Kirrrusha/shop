import React from 'react';
import {Link} from 'react-router-dom';

const Exclusive = () => {
  return (
    <div className="exclusive">
      <div
        className="exclusive-block"
      >
        <div
          className="exclusive-background"
          style={{
            backgroundImage: `url(${require('../../assets/img/trending/product1.png')})`
          }}
        >
        </div>
        <div className="exclusive-product">
          <div className="exclusive-label">
            exclusive
          </div>
          <div className="exclusive-title">
            Fishnet Chair
          </div>
          <div className="exclusive-description">
            Seat and back with upholstery made of cold cure foam. Steel frame, available in matt
            powder-coated black
            or highly polished chrome.
          </div>
          <Link to="/" className="exclusive-link">
            Order Us
          </Link>
        </div>
      </div>

      <div
        className="exclusive-block"
      >
        <div
          className="exclusive-background"
          style={{
            backgroundImage: `url(${require('../../assets/img/trending/product1.png')})`
          }}
        >
        </div>
        <div className="exclusive-product">
          <div className="exclusive-label">
            exclusive
          </div>
          <div className="exclusive-title">
            Fishnet Chair
          </div>
          <div className="exclusive-description">
            Seat and back with upholstery made of cold cure foam. Steel frame, available in matt
            powder-coated black
            or highly polished chrome.
          </div>
          <Link to="/" className="exclusive-link">
            Order Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Exclusive;
