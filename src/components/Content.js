import React from 'react';

import Title from './Title';

class Content extends React.Component {

    render() {
        return (
            <div className="Content">
            <Title
                handleTitleChange={this.props.handleTitleChange}
                container='Content'
                onClick={() => this.props.handleTitleClick()}
                titleName={this.props.data.title}
            />
                <textarea className="content-input" type="text" value={this.props.data.content} onChange={this._handleChange} />
            </div>
        )
    }

    _handleChange = (event) => {
        this.props.handleChange(event.target.value)

    }
}

export default Content;