import React from 'react'
import Banner from "./Banner"
import Column from './Column'

import { page_row, page_c } from './page_classes'
const leftColumn = [
    {
        id: 1,
        title: "ANNOUNCEMENTS",
        titleBgColor: "#181818",
        containerBg: "orangered",
        content:[{
            id: 1,
            subtitle:'COUPLES RETREAT',
            subtitleBg:"",
            date:'August 06, 2019',
            description:"The Couples Retreat would be taking place on from the 12th -14th August at the Holiday Inn, St. Georges Way, Stevenage, SG1..."
        }, {
            id: 2,
            subtitle:"SUNDAY SERVICES IN AUGUST",
            date:"August 06, 2019",
            description:"The Couples Retreate would be taking place on from the 12th -14th August at: Holiday Inn St. George's Way Stevenage, SG1..."
        }]
    }]

    const rightColumn = [{
        title: 'VISION & MISSION FOR 2019',
        titleBgColor:"crimson",
        containerBg: "#181818",
        content:[{
            id:1,
            subtitle: '',
            description: "In actualizing our international vision and mission, we have our conference yearly micro vision and mission. New Covenant Church Edmonton aims for its Church to be at least 1% of the local population; we distinctively work towards making a strong spiritual and physical impact in our local communities."
        },
        {
            id:2,
            title:"",
            subtitle: "Our Vision",
            description: `Raise people into maturity in Christ\n
            Build godly, happy and prosperous families in our vibrant city Churches. \n Help people to discover their unique design and equip them in the spirit of excellence to serve effectively within the Church. \n Help people become instruments of change in society, bringing the love of God into our communities and cities and playing a positive role in the life of the nation and globally. \n Our mission is to bring light and freedom to individuals and raise godly and prosperous families.`
        }]
    }]



const About = () => {
    return (
       
        <div className={page_c}>
            <Banner />
            <div className={page_row}>
                <div><img src="" alt="" /></div>
                <div><img src="" alt="" /></div>
            </div>
            <div className={page_row}>
                <Column contents={leftColumn} />
                <Column contents={rightColumn} />
            </div>
        </div>
    )
}

export default About
