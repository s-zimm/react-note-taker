import React from 'react';

import Title from './Title';

let Content = props => {

    let handleTitleChange = (event) => {
        
    }

    return (
        <div className="Content">
            <input type="text" onChange={props.handleChange} />
        </div>
    )
}

export default Content;