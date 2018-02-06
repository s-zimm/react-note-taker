import React from 'react';

import Title from './Title';

class Content extends React.Component {

    _handleChange(event, e) {
        console.log(event.target.value)
        this.props.handleChange(event.target.value)

    }

    render() {
    return (
        <div className="Content">
        <Title 
            container='Content'
            onClick={() => this.props.handleTitleClick()}
            titleName={this.props.data.title}
        />
            <textarea className="content-input" type="text" value={this.props.data.content} onChange={this._handleChange.bind(this)} />
        </div>
    )
}
}

export default Content;