import Navbar from './components/navBar'
import Modal from './components/Modal';
import CartContainer from './components/cartContainer'
import { useDispatch , useSelector} from 'react-redux';
import { calculateTotals } from './features/cart/cartSlice';
import { useEffect } from 'react';
import Popup from './components/popup';

function App() {   
  const dispatch = useDispatch();
  const {cartItems} = useSelector((store)=>store.cart)
  const {isOpen } = useSelector((store)=>store.modal)
  const {popUpped } = useSelector((store)=>store.popup)


  useEffect(()=>{
    dispatch(calculateTotals())
  },[cartItems])

  return (
    <main>
    {isOpen && <Modal/>}
    <Navbar/>
    {popUpped && <Popup/>}
    <CartContainer/>
    </main>
  )
}

export default App
