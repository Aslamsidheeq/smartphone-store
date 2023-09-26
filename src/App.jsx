import Navbar from './components/navBar'
import Modal from './components/Modal';
import CartContainer from './components/cartContainer'
import { useDispatch ,useSelector} from 'react-redux';
import { calculateTotals } from './features/cart/cartSlice';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  const {cartItems} = useSelector((store)=>store.cart)
  const {isOpen } = useSelector((store)=>store.modal)
  useEffect(()=>{
    dispatch(calculateTotals())
  },[cartItems])
  return (
    <main>
    {isOpen && <Modal/>}
    <Navbar/>
    <CartContainer/>
    </main>
  )
}

export default App
