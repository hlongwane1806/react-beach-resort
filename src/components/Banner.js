import React from 'react';

const Banner = ({children,subtitle,title})=>{
     return(
         <div className="banner">
             <h1>{title}</h1>
             
                <p> {subtitle}</p>
                {children}
             
         </div>
     )
}

export default Banner;