import React from 'react';
import { useState } from 'react';

export default function ReadMore({children}){
    const featureText = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = ()=>{
        setIsReadMore(!isReadMore);
                //sets the isreadmore true state to false whenever clicked
    }
    return(
        <div className="featureText">
            <p>
              
              
                <span onClick={toggleReadMore} className="read-hide">
                    {isReadMore? <i className ="fas fa-chevron-down" id="down">{!featureText}</i>: <i class="fas fa-chevron-up" id="up"> <div className="moving-text">{featureText}</div></i>}
                    {/* when isReadMore has been clicked, the state changes to false and 
                    the whole text is revealed. */}
                    {/* <i onClick={toggleReadMore}class="fas fa-chevron-up"></i> */}
                     {/* {isReadMore? <i class="fas fa-chevron-up"></i>:<i class="fas fa-chevron-up"></i>} */}
                    
                </span>

            </p>

        
        </div>
    )

}