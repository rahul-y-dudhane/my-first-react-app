import React, { Component } from 'react'

class ActionMessage extends Component {

    render() {
        let message;
        if (this.props.flag) {
            message = <h6>Please click on button to go live</h6>;
        } else {
            message = <h6>Congratulations...!! You are live now.</h6>;
        }

        return (
            <div className="container">
                {message}
            </div>
        );
    }

}

export default ActionMessage;