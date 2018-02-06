import React, { Component } from 'react';

class Title extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditing: false
        }
    }

    render() {
        if (this.props.container === 'TitleContainer') {
            return (
                <div onClick={this.props.onClick}>
                    <h3>{this.props.titleName}</h3>
                </div>
            )
        } else if (this.props.container === 'Content') {
            if (this.state.isEditing === true) {
                return (
                    <div>
                        <input onChange={event => this.props.handleTitleChange(event.target.value)} type="text" defaultValue={this.props.titleName} />
                        <button onClick={() => this.setState({ isEditing: false })}>Save</button>
                    </div>
                )
            } else {
                return (
                    <div onClick={() => {this.setState({ isEditing: true })}}>
                        <h3>{this.props.titleName}</h3>
                    </div>
                )
            }
           
        }  
    }
}

export default Title;