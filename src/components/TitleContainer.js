import React from 'react';

import Title from './Title';

const TitleContainer = props => {

    let titleArray = props.data.documents
                                         .map((doc, i) => {
                                             return (
                                                <div>
                                                    <Title
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
        </div>
    )
}

export default TitleContainer;