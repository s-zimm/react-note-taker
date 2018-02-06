import React from 'react';

import Title from './Title';

const TitleContainer = props => {

    let titleArray = props.data.documents
                                         .map((doc, i) => {
                                             return (
                                                <div>
                                                    <Title
                                                        container='TitleContainer'
                                                        titleName={doc.title}
                                                        onClick={() => {
                                                            props.handleClick(i)
                                                        }}
                                                    />
                                                </div>
                                             );
                                         })

    return (
        <div className="TitleContainer">
            {titleArray}
            <button onClick={props.newDocWillLoad}>New Doc</button>
        </div>
    )
}

export default TitleContainer;