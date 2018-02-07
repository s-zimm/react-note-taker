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
                <div onClick={this.props.titleContainerClick} className="sub-title-container">
                    <h3 className="title-list">{this.props.index + 1}. {this.props.titleName}</h3>
                </div>
            )
        } else if (this.props.container === 'Content') {
            if (this.state.isEditing === true) {
                return (
                    <div className="sub-sub-title-container"> 
                        <input className="title-input" onChange={event => this.props.handleTitleChange(event.target.value)} type="text" defaultValue={this.props.titleName} />
                        <button onClick={() => this.setState({ isEditing: false })}>Save</button>
                    </div>
                )
            } else {
                return (
                    <div className="sub-title-container" onClick={() => {this.setState({ isEditing: true })}}>
                        <h3>{this.props.titleName}</h3>
                    </div>
                )
            }
           
        }  
    }
}

export default Title;