import React from 'react';

import Title from './Title';

const TitleContainer = props => {

    let titleArray = props.data.documents.filter(doc => doc.title)
                                         .map(doc => {
                                             return (
                                                <div>
                                                    <Title
                                                        titleName={doc.title}
                                                        onClick={props.handleClick}
                                                    />
                                                </div>
                                             );
                                         })

    return (
        <div className="TitleContainer">
            {titleArray}
        </div>
    )
}

export default TitleContainer;