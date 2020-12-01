import React from 'react'
import Banner from './Banner'
import Column from './Column'
import { page_c, page_row } from './page_classes'

const leftColumn=[{
    id:1,
    title: "Who we are",
    titleBgColor: "#181818",
    containerBg:"crimson",
    description: `Covenant Women (CW) is an outreach arm of the New Covenant Church UK. The ministry was founded on the belief that if we
    "seek first the Kingdom of God and His righteousness" everything else will be added unto us Mark 16 verses 15-18.
    
    The vision of the ministry is to see women of all races, colour and religion develop a personal relationship with God and reach their full potential inhome, career, business, community and ministry.
    Our mandate is to be soul winners, seeking opportunities to show the love of God to all people, starting from the place where we
    live. We enhance and facilitate the work of the church through Outreach events and by setting Godly examples in the community.
    
    Covenant Women is non denominational and its open for all women who love God and who are determined to see all women find their purpose through Christ.`
}, {
    id: 2,
    title: "Activities including meetings",
    titleBgColor: "#181818",
    containerBg:"crimson",
    description: `CW – UK through meetings and seminars provide a platform to show case women leaders both from the immediate
    community and the international arena. We create a forum for spiritual enrichment and educating women on real life issues
    such as raising godly children, sustaining a healthier lifestyle, and encouraging personal career and business development.
    Some of these activities we do jointly with our Covenant Men International (Edmonton) brothers. We are subscription led
    and subscription can be made either annually, quarterly or monthly. Support through individual and corporate organisation
    partnerships are also welcome.
    
    Become a member of the Edmonton Chapter! Please approach any of the following Executives:
    
    President – Abimbola Osibogun
    V. President – Adeola Adedoyin
    Secretary - Joke Macauley
    PRO - Ruth Osholiki
    Treasurer - Esther Fadahunsi`
}]

const rightColumn = [{
    title: 'VISION & MISSION FOR 2019',
    titleBgColor:"crimson",
    containerBg: "#181818",
    content:[{
        subtitle: '',
        description: "In actualizing our international vision and mission, we have our conference yearly micro vision and mission. New Covenant Church Edmonton aims for its Church to be at least 1% of the local population; we distinctively work towards making a strong spiritual and physical impact in our local communities."
    },
    {
        title:"",
        subtitle: "Our Vision",
        description: `Raise people into maturity in Christ\n
        Build godly, happy and prosperous families in our vibrant city Churches. \n Help people to discover their unique design and equip them in the spirit of excellence to serve effectively within the Church. \n Help people become instruments of change in society, bringing the love of God into our communities and cities and playing a positive role in the life of the nation and globally. \n Our mission is to bring light and freedom to individuals and raise godly and prosperous families.`
    }]
}]

const Women = () => {
    return (
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

export default Women;
