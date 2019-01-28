import React from 'react';
import './Footer.css';
import ico1 from '../images/ico-1.svg';
import ico2 from '../images/ico-2.svg';
import ico3 from '../images/ico-3.svg';

const Footer = () => {
    return (
        <footer>
            <div className="wrapper">
                <p className="company"><span>2019 </span><span>| </span><span>Wykonanie:</span> <span>Grzegorz Kalarus</span></p>
                <div className="icons">
                    <img src={ico1} alt="facebook icon"/>
                    <img src={ico2} alt="be icon"/>
                    <img src={ico3} alt="linkedin icon"/>
                </div>
                <div className="desktop">
                    <div className="desktop__year">
                        <span className="rect"></span>2019
                    </div>
                    <div className="desktop__company">
                        <span>Wykonanie:</span> <span>Grzegorz Kalarus</span>
                    </div>
                    <div className="desktop__icons">
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