import React, { Component } from 'react';
import './Topbar.scss';

class Topbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    topbarLeftButton = "<CJames />";

    render() {
        return (
            <div className="top-bar-main">
                <div className="top-bar-left">
                    <h3>{this.topbarLeftButton}</h3>
                </div>
                <div className="top-bar-right">
                    <nav>
                        <a className="nav-link" href="#">Home</a>
                        <a className="nav-link" href="#">Portfolio</a>
                        <a className="nav-link" href="#">Contact</a>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Topbar;