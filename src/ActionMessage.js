import React, { Component } from 'react'

class ActionMessage extends Component {

    render() {
        let message;
        if (this.props.flag) {
            message = "Please click on button to go live";
        } else {
            message = "Congratulations...!! You are live now.";
        }

        return (
            <div className="container">
                <h2>{message}</h2>
            </div>
        );
    }

}

export default ActionMessage;