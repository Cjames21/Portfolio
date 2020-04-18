import React, { Component } from 'react';

import Button from './Button';
import './ButtonBar.scss';

class ButtonBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="btn-bar">
                <Button iconClass="fab fa-inverse fa-github" link="https://github.com/Cjames21" />
                <Button iconClass="fab fa-inverse fa-github" link="https://github.com/Cjames21" />
                <Button iconClass="fab fa-inverse fa-github" link="https://github.com/Cjames21" />
            </div>
        );
    }
}

export default ButtonBar;