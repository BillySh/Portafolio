import React from 'react';
import { useEffect,useState } from "react";
import yo from "./Yo.png";
import qr from "./billyelliot_1_qr.png";
import './Home.css'


const Home= () => {
    
    useEffect( () => {
    },[]); 
    return(
        <div className='container'>
            <div>
                <p className='separator'>
                    <img className='cat' src='https://lh3.bunny.novaskin.me/T7P9x2facwIQu1cxzjeLJkvuk6KlSuAIFKNH-R68kYFWYI15Z9hQypqs02MTGVlbvKR6G2qt5NWW0uSJzIaO7iNapuMR_quDssk' alt=''/> Hi, my name is Humberto
                </p>
                <div className='imgInfoContainer'>
                    <div className='cardContainer'>
                        <div className='card1'>
                            <p className='description'>
                                Im an incoming SWE from Mexico who is interested on cybersecurity and information security, also interested in learning about the aplication of IT tools on business. Althoght I have no current profesional experience, im looking forward to developing interesting and usefull solutions using my technichal abilities.
                                <p className='lang'>Programming Languages</p>
                                <p>Python</p>
                                <p>C++ , C#</p>
                                <p>SQL</p>
                                <p>Clojure, Common Lisp</p>
                                <p className='frame'>Frameworks:</p>
                                <p>Django, React, Flask</p>
                                <p>Check my projects on my github for a better insight on my experience and past projects.</p>
                            </p>
                        </div>
                    </div>
                    <div className='imgM'>
                        <img className='i' src={yo} alt=''/>
                    </div>
                </div>
            </div>
            <div className='bGrid'>
                <a className='linkedIn' href='https://www.linkedin.com/in/humberto-ivan-ulloa-cardona-abbb7a24b/' >
                    <img className='linkedLogo' src='https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png' alt=''></img>
                </a>
                <a className='projects' href='https://github.com/BillySh' >
                    <img className='gitHubLogo' src='https://cdn-icons-png.flaticon.com/512/25/25231.png' alt=''></img>
                </a>
                <a className='projects' href='https://www.instagram.com/billyelliot_1/' >
                <img className='insta' src={qr} alt=''/>
                </a>
            </div>

            
        </div>
    )
}
export default Home