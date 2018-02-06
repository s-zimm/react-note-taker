import React from 'react';

import Title from './Title';

const TitleContainer = props => {

    let titleArray = props.data.documents
                                         .map((doc, i) => {
                                             return (
                                                <div>
                                                    <Title
                                                        key={i}
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
            <button onClick={props.newDocWillLoad}>New Doc</button>
            {titleArray}
        </div>
    )
}

export default TitleContainer;