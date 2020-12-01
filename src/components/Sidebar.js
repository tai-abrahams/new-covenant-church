import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import sidebar from '../css/Sidebar.css'
import {
    sdbr,
    sdbr_c,
    sdbr_t,
    sdbr_h4,
    sdbr_sub,
    sm,
    sdbr_dsc
} from './sidebar_classes'

//let sidebarStyles = classNames.bind(sidebar);


const Sidebar = ({
    contents
}) => {


   const { content } = contents;

    return (
        <div className={sdbr}>
                <div className={sdbr_c} style={{backgroundColor:contents.containerBg}}>
                {contents.title ?
                            <div className={sdbr_t}>
            
                                <h4 className={sdbr_h4} style={{backgroundColor:contents.titleBgColor}}>{contents.title.toUpperCase()}</h4>
                            </div>
                            : null}
                    { content ? 
                    content.map( (content ) => (
                        <div key={content.description}>
                            {content.subtitle ?
                            <div className={sdbr_sub}>{content.subtitle}</div>
                            : null}
                            {content.date ?
                            <small className={sm}>{content.date}</small>
                            : null}
                            
                            {content.description ?
                            <div className={sdbr_dsc}>{content.description}</div>
                            : null}
                            </div>
                    ))
                    : <div key={contents.id} className={sdbr_dsc}>{contents.description}</div>
                    } 
                </div>
        </div>
    )
}

Sidebar.propTypes= {
    //contents: PropTypes.obj.isRequired
}

export default Sidebar;
