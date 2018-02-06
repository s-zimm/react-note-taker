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
                    <div onChange={this.props.handleTitleChange}>
                        <input type="text" defaultValue={this.props.titleName} />
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