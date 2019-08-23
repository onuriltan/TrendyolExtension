import React, {useState, useEffect} from 'react';
import CurrencyInput from 'react-currency-input';
import classNames from 'classnames'

const Popup = ({ product, setOpenPopup, setIsProductMarked }) => {
  const { title, description, price, imgUrl } = product
  const [value, setValue] = useState(null)
  const [otherValue, setOtherValue] = useState(false)
  const [newPrice, setNewPrice] = useState('')

  useEffect( () => {
    calculateNewPrice()
    // eslint-disable-next-line
  }, [value])

  const notifyToApi = () => {
    console.log("Haber ver apiiiye "+newPrice)
    setIsProductMarked(true)
    setOpenPopup(false)
  }

  const setPriceFromInput = (event, maskedvalue, floatvalue) => {
    setNewPrice(maskedvalue)
    setValue(maskedvalue)
  }

  const pickPriceDrop = param => {
    setValue(param)
  }

  const calculateNewPrice = () => {
    if(value && !otherValue) {
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
            'hidden': otherValue,
            'picked-price': value === 5
          })} onClick={() => pickPriceDrop(5)}>
            5%
          </div>
          <div className={classNames({
            'percent': true,
            'hidden': otherValue,
            'picked-price': value === 10
          })} onClick={() => pickPriceDrop(10)}>
            10%
          </div>
          <div className={classNames({
            'percent': true,
            'hidden': otherValue,
            'picked-price': value === 20
          })} onClick={() => pickPriceDrop(20)}>
            20%
          </div>
          <CurrencyInput className={classNames({
            'hidden': !otherValue,
            'pick-other-input': otherValue
          })} onChangeEvent={setPriceFromInput} value={newPrice}  precision="3">
          </CurrencyInput>
          <div className={classNames({
            'percent': true,
            'picked-price': otherValue
          })} onClick={() => setOtherValue(!otherValue)}>
            Diğer
          </div>
        </div>
        <div className="popup-notify-area">
          <div className={classNames({
            'hidden': newPrice === '',
            'popup-notify-btn': newPrice !== ''
          })} onClick={() => notifyToApi()}>
            {newPrice} TL'ye düşünce haber ver
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
