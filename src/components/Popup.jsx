import React, {useState, useEffect} from 'react';
import CurrencyInput from 'react-currency-input';
import classNames from 'classnames'
import axios from 'axios'

const Popup = ({ product, setOpenPopup, setIsProductMarked, userDesiredAmount }) => {
  const { name, amount, imageUrl} = product
  const [value, setValue] = useState(null)
  const [otherValue, setOtherValue] = useState(false)
  const [newPrice, setNewPrice] = useState('')

  useEffect( () => {
    calculateNewPrice()
    // eslint-disable-next-line
  }, [value])

  useEffect(() => {
    if(userDesiredAmount){
      setNewPrice(userDesiredAmount)
      setOtherValue(true);
    }

  }, [userDesiredAmount]) 

  const notifyToApi = () => {

    axios.post('http://localhost:8080/user/notifyMe', {
      "amount":newPrice,
      "userId": 123,
      "contentId": 1248295
    }).then(() => {
      console.log("Haber verdi apiyea"+newPrice)
      setIsProductMarked(true)
      setOpenPopup(false)
    }).catch(()=> {
      console.log("Olmadı")
    })
  }

  const setPriceFromInput = (event) => {
    setNewPrice(event.target.value)
    setValue(event.target.value)
  }

  const pickPriceDrop = param => {
    setValue(param)
  }

  const calculateNewPrice = () => {
    if(value && !otherValue) {
      setNewPrice(amount - (value * amount / 100))
    }
  }

  return (
    <div className='popup'>
      <div className='popup-inner'>
        <div className="popup-header">
          <h2>Fiyat Alarmı Belirle</h2>
          <div className="close-button" onClick={() => setOpenPopup(false)}/>
        </div>
        <div className="popup-body">
          <img className="popup-image" alt="asd" src={`https://img-trendyol.mncdn.com/mnresize/415/622${imageUrl}`}/>
          <div className="popup-product-description">
            <div className="pop-product-name">
              {name}
            </div>
            <div className="pop-product-dsc">
              iPhone 8 64 GB Altın iphone864gold
            </div>
            <div className={classNames({
              'pop-product-price': value === null,
              'old-price': value !== null
            })}>
              {amount} TL
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
          <input className={classNames({
            'hidden': !otherValue,
            'pick-other-input': otherValue
          })} onChange={setPriceFromInput} value={newPrice} >
          </input>
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
