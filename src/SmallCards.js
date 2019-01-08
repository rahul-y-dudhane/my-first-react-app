import React, { Component } from 'react';

import './SmallCards.css';

class SmallCards extends Component {

    render() {
        return (

            <div className="flex-container">

                <div className="card card-small card-profit">
                    <div className="card-body">
                        <h6 class="card-title">$35000 <span> Profit</span></h6>
                        
                    </div>
                </div>
                <div className="card card-small card-Likes">
                    <div className="card-body">
                    <h6 class="card-title">12.2K <span> Likes</span></h6>
                </div>
                </div>
                <div className="card card-small card-Users">
                    <div className="card-body">
                    <h6 class="card-title">1.5M <span> Users</span></h6>
                </div>
                </div>
                <div className="card card-small card-profit">
                    <div className="card-body">
                    <h6 class="card-title"> 25K<span> Orders</span></h6>
                </div>
                </div>
                <div className="card card-small card-Likes">
                    <div className="card-body">
                    <h6 class="card-title">250K <span> Tax</span></h6>
                </div>
                </div>
                <div className="card card-small card-Users">
                    <div className="card-body">
                    <h6 class="card-title">1.5M<span> Views</span></h6>
                </div>
                </div>
            </div>

        )
    }

}

export default SmallCards;