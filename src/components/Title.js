import React from 'react';

const Title = (props) => {

    return (
        <div onClick={props.onClick}>
            <h3>{props.titleName}</h3>
        </div>
    )
}

export default Title;