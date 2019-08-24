import React from 'react';
import notificationActive from "../assets/notification_active.svg"
import notificationPassive from "../assets/notification_passive.svg"

const Product = ({ product, openPopupAction, openPopupValue, setDesiredAmount }) => {
  const { name, amount, imageUrl} = product
  const onClick = () => {
    openPopupAction(!openPopupValue)
    setDesiredAmount(product.userDesiredAmount)
  };

  console.log(product)
  return (
    <div className="product">
      <div className="img-container">
        <img alt="prdct" className="img" src={`https://img-trendyol.mncdn.com/mnresize/415/622${imageUrl}`} />
      </div>
      <div className="details">
        <div className="details-container">
          <div className="product-name">
            {name}
          </div>
          <div className="product-detail">
            iPhone 8 64 GB Altın iphone864gold
          </div>
          <div className="product-price">
            {amount} TL
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
          <div className="notify-on-pricedrop-btn" onClick={() => onClick()}>
            {
              product.userDesiredAmount ? <img src={notificationActive} alt="tl" className="tl-icon" /> 
              :  <img src={notificationPassive} alt="tl" className="tl-icon"/>
            }
          </div>
          <div className="favorite-button">
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
