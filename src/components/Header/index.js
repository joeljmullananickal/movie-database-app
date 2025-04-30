import './index.css'
import {FaShoppingCart} from 'react-icons/fa'

const Header = ({cartItems}) => {
  const getCartCount = () =>
    cartItems.reduce((acc, item) => acc + item.quantity, 0)
  const renderCartIcon = () => (
    <div className="cart-icon-container">
      <FaShoppingCart size={30} color="black" />
      <div className="cart-count-badge">
        <p className="m-0 cart-count">{getCartCount()}</p>
      </div>
    </div>
  )
  return (
    <header className="p-4  nav-header">
      <h1 className="m-0 logo-heading">UNI Resto Cafe</h1>
      <div className="A ms-auto">
        <p className="mt-0 mb-0 me-2 d-none d-sm-block my-orders-text">
          My Orders
        </p>
        {renderCartIcon()}
      </div>
    </header>
  )
}

export default Header
