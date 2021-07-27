import React from 'react';
import {Link} from 'react-router-dom';

export default function Footer(){
    return (
        <div className="footer">
            <p>Thank you for staying with us. 
                Got any more questions?
            </p>
            <Link to= "/contacts" style={{textDecoration:"none"}} ><button>Contact Us</button></Link>
            <p>&copy;Superb 2021</p>

        </div>
    )
}