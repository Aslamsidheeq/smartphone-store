import { useSelector,useDispatch } from "react-redux";
import CartItem from "./cartItem";
import { openModal } from "../features/modal/modalSlice";
import { openPopup } from "../features/popup/popupSlice"

const CartContainer = () =>{
    const dispatch = useDispatch();
    const {cartItems,amount,total} = useSelector((store)=>store.cart)
    if (amount<1){
        return(
            <section className="cart">
            <header>
                <h2>Your bag</h2>
                <h4 className="empty-cart">is currently empty</h4>
            </header>
        </section>
    )
}
    return(
        <section className="cart">
            <header>
                <button onClick={()=>dispatch(openPopup())}>How it works❓</button>
                <h2>Your bag</h2>
            </header>
            <div>
                {cartItems.map((items)=>{
                    return(
                        <CartItem key={items.id} {...items} />
                    )
                })}
            </div>
            <footer>
                <hr />
                <div className="cart-total">
                    <h4>
                        total <span>${total.toFixed(2)}</span>
                    </h4>
                </div>
                <button className="btn clear-btn" onClick={()=>dispatch(openModal())}>clear cart</button>
            </footer>
        </section>
    )
}

export default CartContainer;