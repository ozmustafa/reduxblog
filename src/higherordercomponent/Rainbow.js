import React from 'react';

const Rainbow = (WrappedComponent) =>{
    const colors=['red','pink','orange','blue','green','yellow'];
    const randomColor = colors[Math.floor(Math.random()*6)];
    const cName = randomColor+'-text';
    return(props) => (
        <div className={cName}>
            <WrappedComponent {...props}/>
        </div>
    )
}

export default Rainbow;