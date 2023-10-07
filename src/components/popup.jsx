import { useDispatch } from "react-redux"
import { closePopup } from "../features/popup/popupSlice"

const Popup = () =>{
    const dispatch = useDispatch();
    return(
        <div className="popup-container">
        <div className="pop-text">
        <h3>How the app works ?!</h3>
        <p>State management : Redux-toolkit</p>
        <p>The state is stored in asingle store file , and the components can access the state by subscribing to the store.When an action is dispatched, it is sent to the reducer,which updates the state based on the action type and payload. The updated state is then sent back to the store,which notifies all subscribed components of the change.</p>
        </div>
        <div >
        <button className="btn" onClick={()=>dispatch(closePopup())}>close</button>
        </div>
        </div>
        )
}

export default Popup