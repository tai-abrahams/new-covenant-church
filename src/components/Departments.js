import React from 'react'
import Banner from './Banner'
import Column from './Column'
import { page_c, page_row } from './page_classes'
const leftColumn = [
    {
        id:1, 
        title: "Pastoral Care",
        titleBgColor: "#181818",
        containerBg: "#34587a",
        content:[{
            subtitle:"",
            description: `Our pastoral care ministries connect us to God by providing the support required for having a personal experience with our Lord and maker. The departments under pastoral care are: worship, intercessory, pastoral visitation, School of preachers and ministries, house group cells, creative & drama, and the welcome team.`
        }, {
            subtitle: "FAMILY WELFARE & HELP",
        description: `	This ministry oversees and caters for the physical welfare of our members and support the building of homes and families i.e. children, singles, married, separated, widows, widowers, aged etc. Departments include welfare-catering, Children, youths, singles, couples and the pregnant women ministries.`
        }, {
            subtitle: "PASTORAL SUPPORT & PROTOCOL",
        description: `Our pastor's support and protocol team serves as the core centre of functional support for our pastoral team. Departments are Programme Planning & Protocol, Annoucements, Special Assistant Support.`
        }]
    }, {
        id: 2,
        title:"Treasury house",
        containerBg: "#34587a",
        titleBgColor: "#181818",
        description: "Deals with the front facing and back office support of the church's treasury. The departments under this ministry are ushers, counters, bookshop and inventory, sales and AVE merchandise."
    }, {
        id: 3,
        title:"Service Management",
        containerBg: "#34587a",
        titleBgColor: "#181818",
        description:"This department provides for the administrative and infrastructural elements of the church. The departments under this ministry are Audio and video, publicity, media, building maintenance and information desk."
    }, {
        id: 4,
        title:"Teaching & Development",
        containerBg: "#34587a",
        titleBgColor: "#181818",
        description: `This ministry supports the spiritual and personal growth of our walk with God. Departments include the BBC (the bible believers class including water baptism), workers in training, ministers in
        training, and house group training.`
    }, {
        id: 5,
        title: "Evangelism",
        containerBg: "#34587a",
        titleBgColor: "#181818",
        description: `Our Evangelism team tsets its focus on the core commission of saving souls and bringing people to the knowledge of Christ. Departments include soul winning team, prison and hospital team, prayer support team and counselling team.`
    }, {
        id: 6,
        title:"Outreach& missions",
        containerBg: "#34587a",
        titleBgColor: "#181818",
        description:"This ministry sets its focus on bringing people to the church through different outreach programmes and supports our vision 1% of the community coming to know God through Church planting. The departments under this ministry are church planting grants& funding, charitable works and projects including; J218, Covenant men and Covenant women, follow up old members."
    }, {
        id: 7,
        title: "Special Projects and Project Logistics",
        containerBg: "#34587a",
        titleBgColor: "#181818",
        description: `	Supports one off projects and programmes within the church and oversees project based teams.`
    }
]

const rightColumn = [
    {
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
    }
]

const Departments = () => {
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

export default Departments;
