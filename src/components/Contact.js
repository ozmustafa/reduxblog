import React from 'react';
import Rainbow from '../higherordercomponent/Rainbow';


const Contact = () => {
    return (
        <div>
            <div className="container">
                <h4 className="center">Contact</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam dolores impedit aut consequuntur est sequi laboriosam minus ipsa magnam voluptatum iusto porro hic temporibus nisi, mollitia pariatur neque asperiores explicabo?</p>
            </div>
        </div>
    )
}

export default Rainbow(Contact);