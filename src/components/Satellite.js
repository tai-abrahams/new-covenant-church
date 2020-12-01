import React from 'react'
import Banner from './Banner'
import Column from './Column'
import { page_c, page_row } from './page_classes'

const leftColumn = [
    {
        id: 1,
        title:'Who we are',
        titleBgColor: "#181818",
        containerBg: '#15ce87',
        description: `NCC Edmonton is a Conference Centre and has a number of churches which form the Conference. As the Head of the conference, Pastor Tayo Arowojolu is the head of the Conference Centre and Pastor Ade Omotunde is the Associate Pastor for the Conference.
        The other churches in the Conference Centre are listed below.`
    }, {
        id: 1,
        title: 'Edmonton',
        titleBgColor: "#181818",
        containerBg: '#15ce87',
        subtitle: 'Pastor in charge',
        description: `PASTOR TAYO AROWOJOLU
        Address: 65 Church Street, Edmonton, London N9 9PY. Tel: 02088039883`
    }, {
        id: 2,
        title: 'Purfleet',
        titleBgColor: "#181818",
        containerBg: '#15ce87',
        subtitle: 'Pastor in charge',
        description: `PASTOR AYO AJILORE
        Address: Purfleet Primary School New Tank Hill Road, Purfleet Essex. RM19 1TA. Tel: 020 88018319`
    }, {
        id: 3,
        title: 'Cheshunt',
        titleBgColor: "#181818",
        containerBg: '#15ce87',
        subtitle: 'Pastor in charge',
        description: `PASTOR VICTOR OLATUNJI
        Address: 37 Hatton Road, Cheshunt. EN8 0QG. Tel: 07792132921` 
    }, {
        id: 4,
        title: 'Milton keynes',
        titleBgColor: "#181818",
        containerBg: '#15ce87',
        subtitle: 'Pastor in charge',
        description: `PASTOR ADE OMOTUNDE
        Address: The Pavilion, Hazeley School, Emperor Drive, Hazeley, MK8 0PT. Tel: 01908 330 715` 
    }, {
        id: 5,
        title: 'Edmonton',
        titleBgColor: "#181818",
        containerBg: '#15ce87',
        subtitle: 'Pastor in charge',
        description: `PASTOR ALFRED ASSAMOI
        Address: 65 Church Street, Edmonton, London N9 9PY. Tel: 02088039883` 
    }, {
        id: 6,
        title: 'Stratford',
        titleBgColor: "#181818",
        containerBg: '#15ce87',
        subtitle: 'Pastor in charge',
        description: `PASTOR BAYO AJAYI
        Address: 65 Church Street, Edmonton, London N9 9PY. Tel: 02088039883` 
    }, {
        id: 7,
        title: 'Park Royal',
        titleBgColor: "#181818",
        containerBg: '#15ce87',
        subtitle: 'Pastor in charge',
        description: `PASTOR SEYI ODUSANYA
        Address: 65 Church Street, Edmonton, London N9 9PY. Tel: 02088039883` 
    }
]

const rightColumn = [
    {
        id: 1,
        title: "ANNOUNCEMENTS",
        titleBgColor: "#181818",
        containerBg: "crimson",
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

    const subColumn = []


const Satellite = () => {

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

export default Satellite;

//make a subcolumn component that goes in the sidebar component, map subcomponent to send data to subcompnent