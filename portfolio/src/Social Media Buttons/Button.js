import React, {Component} from 'react';
import './Button.scss';

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            iconClass: props.iconClass,
            btnLink: props.link,

         };

        this.btnClick = this.btnClick.bind(this);
    }

    btnClick() {
        window.open(this.state.btnLink);
    }

    render() {
        return (
            <div className="btn-side-bar">
               <i className={this.state.iconClass} onClick={this.btnClick}></i>
            </div>
        );
    }
}

export default Button;