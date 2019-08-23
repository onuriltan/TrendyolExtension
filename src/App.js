import React, { useState } from 'react';
import NavBar from './components/Navbar'
import Product from './components/Product'
import Popup from './components/Popup'
import data from './data/products'

function App() {
  const product = data.products[0]
  const [openPopup, setOpenPopup] = useState(false)

  return (
    <div className="App">
      <NavBar />
      <div style={{maxWidth: "1000px", margin: "0 auto"}}>
      <Product product={product} openPopupAction={setOpenPopup} openPopupValue={openPopup}/>
        {openPopup ? <Popup product={product} setOpenPopup={setOpenPopup}/> : null}
      </div>
    </div>
  );
}

export default App;
