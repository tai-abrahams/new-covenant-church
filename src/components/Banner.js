import React from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'


const Banner = ({props}) => {
    return(
        <div className="d-flex mt-5 p-0 flex-md-row flex-column">
            <div className="d-flex h-auto flex-wrap pr-3 pt-3 pb-3 mr-auto w-25">
            <Link to="/" className="ml-auto mr-md-auto mt-auto mb-auto"><img src={logo} /></Link>
            </div>
            <h1 className="d-flex w-75 flex-nowrap pl-3 pt-3 pb-3 pr-0 display-5 font-weight-normal border-left border-dark">
                WHERE THE PRAISE IS HIGH, THE WORSHIP IS INTENSE AND OUR PRAYERS ARE ANSWERED.
            </h1>
        </div>
    )
}

export default Banner;