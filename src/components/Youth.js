import React from 'react'
import Banner from './Banner'
import Column from './Column'
import { page_c, page_row } from './page_classes'

const leftColumn =[
    {
        id: 1,
        title: "Vision & Mission for 2019",
        titleBgColor: 'crimson',
        containerBg: '#181818',
        content:[{
            description: `In actualizing our international vision and mission, we have our conference yearly micro vision and mission:
            New Covenant Church Edmonton aims for its Church to be at least 1% of the local population; we distinctively work
            towards making a strong spiritual and physical impact in our local communities.`,
        }, {
            subtitle: "Our Vision",
            description: `Raise people into maturity in Christ

            Build godly, happy and prosperous families in our vibrant city churches.
            
            Help people to discover their unique design and equip them in the spirit of excellence to serve effectively within the Church.
            
            Help people become instruments of change in society, bringing the love of God into our communities and cities and playing a positive role in the life of the nation and globally.
            
            Our mission is to bring light and freedom to individuals and raise godly and prosperous families.`
        }]
        
    }
]


const rightColumn = [{
    id: 1,
    title: "ANNOUNCEMENTS",
    titleBgColor: "crimson",
    containerBg: "#181818",
    content:[{
        subtitle:'COUPLES RETREAT',
        subtitleBg:"",
        date:'August 06, 2019',
        description:"The Couples Retreat would be taking place on from the 12th -14th August at the Holiday Inn, St. Georges Way, Stevenage, SG1..."
    }, {
        subtitle:"SUNDAY SERVICES IN AUGUST",
        date:"August 06, 2019",
        description:"The Couples Retreate would be taking place on from the 12th -14th August at: Holiday Inn St. George's Way Stevenage, SG1..."
    }]
}]


const Youth = ()=>{
    return(
        <div className={page_c}>
            <Banner text={'hi'} />
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

export default Youth;