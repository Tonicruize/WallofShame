import React from 'react';

const ProductCard = ({ title, price, imgSrc, countdown, detailsUrl }) => {
  return (

  
    <div className="single-product style--one">
      <img src={imgSrc} alt={title} />
      <div className="product-content">
        <div className="product-top">
          <h5>{title}</h5>
          <div className="d-flex justify-content-between">
            <h6>{price} ETH</h6>
            <div className="countdown-wrap">
              <ul className="countdown">
                <li><span className="hours">{countdown.hours}</span></li>
                <li className="ms-1 me-1">:</li>
                <li><span className="minutes">{countdown.minutes}</span></li>
                <li className="ms-1 me-1">:</li>
                <li><span className="seconds">{countdown.seconds}</span></li>
                <li className="text-uppercase ms-1">left</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="product-bottom">
          <div className="button-group">
            <a href={detailsUrl} className="btn btn-sm btn-border">
              <img src="assets/img/icons/judge-icon.svg" alt="" className="svg" />
              Place Bid
            </a>
          </div>
        </div>
      </div>
    </div>

  );
};

export default ProductCard;
