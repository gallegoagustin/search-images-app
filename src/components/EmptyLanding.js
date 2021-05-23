import React from 'react';
import './EmptyLanding.css';

function EmptyLanding(props) {
    return (
        <div className='alertContainer'>
            <div className='textBox'>
                There are no images searched yet.
            </div>
        </div>
    );
}

export default EmptyLanding;