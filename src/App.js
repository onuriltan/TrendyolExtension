import React, { useState, useEffect } from 'react';
import NavBar from './components/Navbar'
import Product from './components/Product'
import Popup from './components/Popup'
import data from './data/products'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { css } from 'glamor';

function App() {
  const product = data.products[0]
  const [openPopup, setOpenPopup] = useState(false)
  const [isProductMarked, setIsProductMarked] = useState(false)
  useEffect(() => {
    if (isProductMarked) {
      makeToast()
      setTimeout(() => setIsProductMarked(false), 2000)
    }
  },[isProductMarked])

  const makeToast = () =>
    toast("Ürün istediğiniz fiyata düştüğünde mailinize bildirim gelecektir",{
      className: css({
        borderRadius: '3px'
      }),
      bodyClassName: css({
        fontSize: '16px',
        color: 'black',
        padding: '10px'
      }),
      progressClassName: css({
        background: "#f27a1a"
      }),
      autoClose: 5000
    });

  return (
    <div className="App">
      <NavBar />
      <div style={{maxWidth: "1000px", margin: "0 auto"}}>
      <Product product={product} openPopupAction={setOpenPopup} openPopupValue={openPopup}/>
        {openPopup ? <Popup product={product} setIsProductMarked={setIsProductMarked}
                            setOpenPopup={setOpenPopup}/> : null}
        <ToastContainer/>
      </div>
    </div>
  );
}

export default App;
