import React from 'react';

const Title = (props) => {

    if (props.contentTitle) {
        return (
        <div>
            <input type="text"/>
        </div>
        )
    }

    return (
        <div>
            <input type="text"/>
        </div>
    )
}

export default Title;