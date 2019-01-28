import React from 'react';
import './Header.css';

const Header = ({nextSunday}) => {
    return(
        <header className="wrapper">
            <div className="firstBlock">
                <p>Niedziela handlowa</p>
            </div>
            <div className="secondBlock">
                <p>Dzień dobry!</p>
            </div>
            <div className="thirdBlock">
                <p>W najbliższą niedzielę ({nextSunday}) sklepy będą:</p>
            </div>
        </header>
    )
}

export default Header