import React, { Component } from 'react';

import { Button } from 'reactstrap';
import ActionMessage from './ActionMessage';


class MyTitle extends Component {

    constructor(props) {
        super(props);
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);

        this.state = {
            date: new Date(),
            disabledBtn: true
        }

    }


    /**
     * @function start
     * @description Starts the time from current time
     */
    start() {
        this.setState({ disabledBtn: false });

        this.timer = setInterval(
            () => {
                this.tick();
            }, 1000
        )
    }


    /**
     * @function stop
     * @description Stop's ongoing timer
     */
    stop() {
        this.setState({ disabledBtn: true });

        clearInterval(this.timer);
    }


    /**
     * @function tick
    * @description used to set state after 1 sec time interval
     */
    tick() {
        this.setState(
            {
                date: new Date()
            }
        );
    }


    /**
     * @function render
     * @description Render's Title for the webpage
     */
    render() {
        return (
            <div className="card card-mytitle">
                <div className="card-body">
                    <h4>{this.props.name} !</h4>
                    <h6>{this.state.date.toLocaleTimeString()}</h6>
                    <Button hidden={this.state.disabledBtn} onClick={this.stop} color="danger">Stop</Button>
                    <button hidden={!this.state.disabledBtn} onClick={this.start} className="btn btn-info">Go Live  </button>
                    <ActionMessage flag={this.state.disabledBtn} />
                </div>
            </div>
        );
    }
}

export default MyTitle;