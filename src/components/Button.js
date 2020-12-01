import React from 'react';
import '../css/Button.css';
import { Link } from 'react-router-dom'

const Button = ({text, link}) => {
    return (
        <div className="button">
            <h4><Link className="nav-link" to={link}>{text}</Link></h4>
        </div>
    )
}

export default Button;