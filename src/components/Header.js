import React from 'react';
import './Header.css';

const Header = () => {
    return(
        <header className="wrapper">
            <div className="firstBlock">
                <p>Niedziela handlowa</p>
            </div>
            <div className="secondBlock">
                <p>Dzień dobry!</p>
            </div>
            <div className="thirdBlock">
                <p>W najbliższą niedzielę (03.01.2019) sklepy będą:</p>
            </div>
        </header>
    )
}

export default Header