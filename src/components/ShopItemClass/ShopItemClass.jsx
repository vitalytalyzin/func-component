import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ShopItemClass.css';
import { smartRound } from '../../utils/smartRound';

class ShopItemClass extends Component {
  render() {
    const { brand, title, description, descriptionFull, currency, price } = this.props.item;
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
  }
}

ShopItemClass.propTypes = {
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

export default ShopItemClass;
