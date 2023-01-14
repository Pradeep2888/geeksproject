import React from 'react'
import '../Styles/Navbar.css'
import { AiOutlineShoppingCart} from 'react-icons/ai';

function Navbar() {
  return (
    <div className='navbar_box' >
        
        <div className='navbar_card-1' >
            <h3>TeeRex Store</h3>
        </div>

        <div className='navbar_card-2' >
            <div>
            <h3>Products</h3>
            </div>
            <div className='cart' >
                <AiOutlineShoppingCart className='cart_icon' />
            </div>
        </div>

    </div>
  )
}

export default Navbar