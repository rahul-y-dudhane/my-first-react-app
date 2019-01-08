import React, { Component } from 'react';

import './sidebar.css';
import logo from './logo.svg';
import MyTitle from './MyTitle';
import SmallCards from './SmallCards';


class Sidebar extends Component {

    constructor(props){
        super(props)
        this.toggleSidebar = this.toggleSidebar.bind(this);
    }

    toggleSidebar(){
        console.log("clicked");
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row menu">
                    <div className="col-sm-12">

                        <span className="heading" onClick={this.toggleSidebar}>
                            <img src={logo} className="App-logo1" alt="logo" />
                            Dashboard &nbsp;  &#9776;</span>
                    </div>
                </div>
                <div className="row">
                    <div className="sidenav">

                        <a href="home.html"><i className="fa fa-fw fa-home"></i> Home</a>

                        <a href="home.html"><i className="fa fa-fw fa-sign-in"></i> Login</a>

                        <a href="home.html"><i className="fa fa-fw fa-user"></i> My Profile</a>

                        <a href="home.html"><i className="fa fa-fw fa-comment"></i> My Reviews</a>

                        <a href="home.html"><i className="fa fa-fw fa-user-plus"></i> Add User</a>

                        <a href="home.html"><i className="fa fa-fw fa-plus-circle"></i> Add Review</a>

                        <a href="home.html"><i className="fa fa-fw fa-sign-out"></i> Logout</a>
                    </div>

                    <div className="main text-center">
                       
                            <MyTitle name="Welcome To Dashboard" />

                            <SmallCards />
                    </div>
                </div>
            </div>
        );
    }
}

export default Sidebar;