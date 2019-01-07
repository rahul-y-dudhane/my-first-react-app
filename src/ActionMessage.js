import React, { Component } from 'react'

class ActionMessage extends Component {

    render() {
        let message;
        if (this.props.flag) {
            message = <h2>Please click on button to go live</h2>;
        } else {
            message = <h2>Congratulations...!! You are live now.</h2>;
        }

        return (
            <div className="container">
                {message}
            </div>
        );
    }

}

export default ActionMessage;