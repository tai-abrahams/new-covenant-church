import React from 'react';
import Banner from './Banner'
import Sidebar from "./Sidebar"
import Column from './Column'
import '../css/Main.css'
import { page_c, page_row, page_text } from './page_classes'
const rightColumn = [{
    id:1,
    title:"Announcements",
    subtitle:"",
    titleBgColor: "crimson",
    description: "Twitter API Content",
    containerBg:"#181818"
}]

const leftColumn = [{
    id:1,
    title: "PASTORS MONTHLY MESSAGE",
    titleBgColor: "#181818",
    description:`Then God said, 'Let Us make man in Our image, according to Our likeness; 
    let them have dominion over the fish of the sea, over the birds of the air, 
    and over the cattle, over all the earth and over every creeping thing that 
    creeps on the earth.' So God created man in His own image; in the image of 
    God He created him; male and female He created them. Then God blessed them, 
    and God said to them, 'Be fruitful and multiply; fill the earth and subdue it; 
    have dominion over the fish of the sea, over the birds of the air, and over every 
    living thing that moves on the earth.' ${(<br></br>)}
    
    The man-the husband; the wife- the woman. These are God's ultimate creation. God 
    took his time in creating them, male and female he created them. The positions 
    they occupy in the affairs of this world is of such that, they can do and undo. 
    If a man/husband can wholly serve the Lord, God will do everything to satisfy him. 
    Same thing goes for the woman. There is an abundant anointing that comes with being 
    a man/husband and a woman/wife. That anointing is attractive to the devil. The devil 
    hate the idea that we now have dominion, and he has nothing. His ultimate desire 
    therefore is to destroy God's ultimate creation. How can he do this – to penetrate 
    man's inner sanctuary, and woman's temple? It is therefore important that as men and 
    women we have specialised prayer points that are geared towards the husband, and the 
    wife, and then the single male and the single female. This month and in the prayer 
    and solution night our prayers would be geared towards the husband and the wife, 
    including every aspect of the family unit, and all those who desire to fulfil that 
    ministry.
    
    Children are the heritage of the Lord; the fruit of the womb is a reward. Psalm 127. 
    Jesus says that do not forsake the children for them the kingdom of God was made. 
    He says anyone that lead them astray, it is better to have a millstone tied round 
    their neck, and drop into the sea, and into the depth of the sea. So, it is apparent 
    that God loves children, and adores them. In fact he wishes everyone to be like him 
    or her as a requisite to entering the kingdom of God. So, as usual, whatever God loves 
    and cherishes, the devil hates, and detest. It is therefore important that we pray hard 
    against the wiles of the devil. God's agenda for the world must start with people who 
    are first children, so if we can take control of our children, and call them to seek 
    after God early in their life, then the sky is the limit. The devil knows this and he 
    is of the agenda to destroy that plan. He can do it in two ways: either by preventing 
    child bearing through evil and deceitful belief (that they are trouble makers, spoilt, 
    headaches) or by the spirit of barrenness. The other way is if you now have children, 
    he will attempt to corrupt and destroy them at a young age, and as they are growing, 
    he introduces them to all sorts of evil desire. We therefore need to counter him in 
    all forms and ways, and break the barrier, and pray all round for our children. So in
    addition to the back to school prayer, we need to reinforce our prayers for our 
    children. You will not be ashamed Pastor Tayo.`, 
    containerBg: "crimson"
}]

const Main = () => {
    return(
            <div className={page_c}> {/*main container - deleted main */}
                <Banner />
                <div className={page_row}>
                    {/*TODO ADD IMAGES OF PASTOR/PASTOR-WIFE*/}
                    <div><img src="" alt="" /></div>
                    <div><img src="" alt="" /></div>
                </div>
                <div className={page_row}>
                    <div className={page_text}>
                        TAYO AROWOJOLU is the Pastor in charge of New Covenant Church Edmonton, and the Conference Pastor of New Covenant Church Edmonton Conference. He is a Barrister and Solicitor in Nigeria, and Solicitor in the UK with combined experience of 24 years. He also runs a successful Leadership Academy in the UK for forward thinking leaders. Tayo believes in the concept that leaders are thinkers and can be fully tutored and nurtured into excellence.
                    </div>
                    <div className={page_text}>
                        BIMBO AROWOJOLU is an ordained Reverend in the New Covenant Church. She is a great supporter of women development and a spiritual mother to many women. An inspiration, and a determined woman, she is a leading expert in business solutions particularly in the area of customer's services and Human Capital Development. She operates a successful management consultancy outfit both in the UK and in Nigeria.</div>
                </div>
                <div className={page_row}>
                    <Column contents={leftColumn} />
                    <Column contents={rightColumn} />
                </div>
                </div>
        

    )
}

export default Main;
