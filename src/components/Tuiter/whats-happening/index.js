import React, {useState} from "react"
import {useDispatch} from "react-redux"
import "./whats-happening.css"

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening]
        = useState('');
    const dispatch = useDispatch();
    const tuitClickHandler = () => {
        dispatch({type: 'create-tuit',
            tuit: whatsHappening
        });
    }
    return (
        <>
            <div>
      <textarea id={"whats-happening"} value={whatsHappening}
                onChange={(event) =>
                    setWhatsHappening(event.target.value)}>
      </textarea>
            </div>
            <div id={"pad-me-bottom"}>
                <span id={"justify-me-left"}>
                  <i className="fa-solid fa-file-image"></i>   <i className="fa-solid fa-paper-plane"></i> <i className="fa-solid fa-smile"></i> <i className="fa-solid fa-calendar"></i>
                </span>
            <button type="button" className="btn btn-primary rounded-pill" id="justify-me-right" onClick={tuitClickHandler}>
                Tuit
            </button>
            </div>
        </>
    );
}
export default WhatsHappening;