import React from 'react';
import { useEffect,useState } from "react";
import './Home.css'


const Home= () => {
    
    useEffect( () => {
    },[]); 
    return(
        <div>
            <div className='imgContainer'>
                <div className='bgImg'>
                    <img className='img1' src='https://i0.wp.com/garonpower.com/wp-content/uploads/2019/01/computer-programming.jpeg?fit=1500%2C1000&ssl=1' alt=''/>
                </div>
                <div className='imgText'>
                    <h2 className='textImg'>Humberto Ivan Ulloa Cardona</h2>
                </div>
                <div>
                    <p className='separator'>Who am i?</p>
                    <div className='cardContainer'>
                        <div className='card1'>
                            <p> Im an incoming SWE from Mexico who is interested on cybersecurity and information security, also interested in learning about the aplication of IT tools on business and retibution</p>
                        </div>
                    </div>
                </div>
                <br></br>
                
            </div>
        </div>
    )
}
export default Home