import React from 'react';
import PropTypes from 'prop-types';
import './ShopItemFunc.css';
import { smartRound } from '../../utils/smartRound';

const ShopItemFunc = (props) => {
  const { brand, title, description, descriptionFull, currency, price } = props.item;
  const currentPrice = smartRound(price, 2);

  return (
    <div className="main-content">
      <h2>{brand}</h2>
      <h1>{title}</h1>
      <h3>{description}</h3>
      <div className="description">{descriptionFull}</div>
      <div className="highlight-window mobile">
        <div className="highlight-overlay" />
      </div>
      <div className="divider" />
      <div className="purchase-info">
        <div className="price">
          {currency}{currentPrice}
        </div>
        <button>Добавить в корзину</button>
      </div>
    </div>
  );
};

ShopItemFunc.propTypes = {
  item: PropTypes.shape({
      brand: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      descriptionFull: PropTypes.string,
      price: PropTypes.number,
      currency: PropTypes.string,
    },
  ),
};

export default ShopItemFunc;
