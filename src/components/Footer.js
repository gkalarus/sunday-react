import React from 'react';
import './Footer.css';
import ico1 from '../images/ico-1.svg';
import ico2 from '../images/ico-2.svg';
import ico3 from '../images/ico-3.svg';

const Footer = () => {
    return (
        <footer>
            <div className="wrapper">
                <p className="company"><span>2018 </span><span>| </span><span>Wykonanie:</span> <span>Grzegorz Kalarus</span></p>
                <div className="icons">
                    <img src={ico1} alt="facebook icon"/>
                    <img src={ico2} alt="be icon"/>
                    <img src={ico3} alt="linkedin icon"/>
                </div>
                <div class="desktop">
                    <div class="desktop__year">
                        <span class="rect"></span>2018
                    </div>
                    <div class="desktop__company">
                        <span>Wykonanie:</span> <span>Grzegorz Kalarus</span>
                    </div>
                    <div class="desktop__icons">
                        <img src={ico1} alt="facebook icon"/>
                        <img src={ico2} alt="be icon"/>
                        <img src={ico3} alt="linkedin icon"/>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;