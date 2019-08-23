import React from 'react';
import tl from "../assets/tl.svg"
import dow_arrow from "../assets/dow-arrow.svg"

const Product = ({ product, openPopupAction, openPopupValue }) => {
  const { title, description, price, imgUrl} = product
  return (
    <div className="product">
      <div className="img-container">
        <img alt="prdct" className="img" src={imgUrl} />
      </div>
      <div className="details">
        <div className="details-container">
          <div className="product-name">
            {title}
          </div>
          <div className="product-detail">
            {description}
          </div>
          <div className="product-price">
            {price} TL
          </div>
        </div>
        <div className="details-container">
          <div className="product-name">
            Ürün Bilgileri
          </div>
          <div className="product-item" style={{marginTop: "10px", fontSize: "12px"}}>
            15 gün içinde ücretsiz iade.Detaylı bilgi için tıklayın
          </div>
          <div className="product-item" style={{fontSize: "12px"}}>
            Bu ürün Trendyol adına Uygut Gıda Bilişim ve Turizm A.Ş tarafından gönderilecektir.
          </div>
          <div className="product-item" style={{fontSize: "12px"}}>
            Bu üründe indirim kuponları/kodları geçerli değildir.
          </div>
        </div>
        <div className="actions">
          <div className="buy-button">
            Sepete Ekle
          </div>
          <div className="notify-on-pricedrop-btn" onClick={() => openPopupAction(!openPopupValue)}>
            <img src={tl} alt="tl" className="tl-icon"/>
            <img src={dow_arrow} alt="arrow" className="tl-icon"/>
          </div>
          <div className="favorite-button">
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
