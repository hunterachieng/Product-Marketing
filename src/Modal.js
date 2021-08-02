import React from 'react';

export default function Modal({show, setShow}){
    
    return(
        <div className = "modal">
            <div className="modal-content">

                <div className="modal-body">
                    <button id="modal" onClick = {setShow}>Close</button>
                    <h3 id="heading">Superb</h3>
                    <h4 id="heading2">Your one stop electronics shop</h4>
                    
                </div>
                <div className="modal-form">
                    <form>
                        <p>Sign-Up for our Monthly Newsletter</p>
                        <input
                        name= "username"
                        type="text"
                        placeholder="UserName"
                        className="inputs head"
                        /><br/><br/>

                        <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        className = "inputs"
                        /><br/><br/>
                        <input
                        type="checkbox"
                        name= "checkbok"
                       
                       /><label for="checkbox"
                       style={{color:"white"}}
                       >Monthly Newsletter</label><br/><br/>
                        <input
                        type = "submit"
                        name = "submit"
                        value = "submit"
                        className = "modal-submit"
                        

                        />
                        
                    </form>

                </div>

            </div>
            </div>
    )
}