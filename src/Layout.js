import React from 'react';


export default function Layout({title ="Superb", className,children}){
    return(
        <div>
            <div className="layout">
                <h2>{title}</h2>
                <p>Your one stop electronics shop</p>
            </div>
            <div className={className}>
                {children}

            </div>
        </div>
    )

}