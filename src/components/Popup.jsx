import React, {useState, useEffect} from 'react';
import classNames from 'classnames'

const Popup = ({ product, setOpenPopup }) => {
  const { title, description, price, imgUrl } = product
  const [value, setValue] = useState(null)
  const [newPrice, setNewPrice] = useState(null)

  useEffect( () => {
    calculateNewPrice()
  }, [value])

  const notifyToApi = () => {
    console.log("Haber ver apiiiye")
    setOpenPopup(false)
  }

  const pickPriceDrop = param => {
    setValue(param)
  }

  const calculateNewPrice = () => {
    if(value) {
      setNewPrice(price - (value * price / 100))
    }
  }

  return (
    <div className='popup'>
      <div className='popup-inner'>
        <div className="popup-header">
          <h2>Fiyat Düşüşü Belirle</h2>
          <div className="close-button" onClick={() => setOpenPopup(false)}/>
        </div>
        <div className="popup-body">
          <img className="popup-image" alt="asd" src={imgUrl}/>
          <div className="popup-product-description">
            <div className="pop-product-name">
              {title}
            </div>
            <div className="pop-product-dsc">
              {description}
            </div>
            <div className={classNames({
              'pop-product-price': value === null,
              'old-price': value !== null
            })}>
              {price} TL
            </div>
            <div style={{display: 'flex', alignItems: 'center', fontSize: '20px', marginTop: '10px'}} className={classNames({
              'hidden': value === null,
            })}>
              Belirlediğiniz Fiyat:
              <div className={classNames({
                'hidden': value === null,
                'new-price': value !== null,
              })}>
                {newPrice} TL
              </div>
            </div>

          </div>
        </div>

        <div className="popup-actions">
          <div className={classNames({
            'percent': true,
            'picked-price': value === 5
          })} onClick={() => pickPriceDrop(5)}>
            5%
          </div>
          <div className={classNames({
            'percent': true,
            'picked-price': value === 10
          })} onClick={() => pickPriceDrop(10)}>
            10%
          </div>
          <div className={classNames({
            'percent': true,
            'picked-price': value === 20
          })} onClick={() => pickPriceDrop(20)}>
            20%
          </div>
          <div className={classNames({
            'percent': true,
            'picked-price': value === "other"
          })} onClick={() => pickPriceDrop("other")}>
            Diğer
          </div>
        </div>
        <div className="popup-notify-area">
          <div className={classNames({
            'hidden': newPrice === null,
            'popup-notify-btn': newPrice !== null
          })}

               onClick={() => notifyToApi()}
          >
            {newPrice} TL'ye düşünce haber ver
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
