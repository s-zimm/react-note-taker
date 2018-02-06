import React from 'react';

import Title from './Title';

class Content extends React.Component {

    _handleChange = (event) => {
        this.props.handleChange(event.target.value)

    }

    _handleTitleChange = (event) => {
        this.props.handleTitleChange(event.target.value)
    }

    render() {
    return (
        <div className="Content">
        <Title
            handleTitleChange={this._handleTitleChange}
            container='Content'
            onClick={() => this.props.handleTitleClick()}
            titleName={this.props.data.title}
        />
            <textarea className="content-input" type="text" value={this.props.data.content} onChange={this._handleChange} />
        </div>
    )
}
}

export default Content;