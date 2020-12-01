import React from 'react';
import Button from './Button.js'
import '../css/NavBar.css'

import classnames from 'classnames';

const titles = [
    {
        id: 1,
        name: 'HOME'
    }, {
        id: 2,
        name: 'ABOUT US'
    }, {
        id: 3,
        name: 'DEPARTMENTS'
    }, {
        id: 4,
        name: 'WOMEN'
    }, {
        id: 5,
        name: 'YOUTH'
    }, {
        id: 6,
        name: 'SATELLITE'
    }, {
        id: 7,
        name: 'PROGRAMMES'
    }, {
        id: 8,
        name: 'CONTACT US'
    }, 
]


const navbar_res = classnames({

})

const NavBar = ({routes}) => {
    return(
        <nav className="navbar navbar-expand-md sticky-top navbar-dark" style={{backgroundColor: '#2c2c2c'}}>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
            {/*<div className="d-flex flex-row align-content-center justify-content-center w-75" > */}
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto ml-auto">
                    {
                        routes.map((route)=>(
                                <li className="nav-item active" key={route.path}><Button key={route.path} text={route.name} link={route.path}/></li>
                        ))
                    }
                </ul>
            </div>
            {/*</div>*/}
        </nav>
    )
}

export default NavBar;