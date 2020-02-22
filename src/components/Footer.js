import React from 'react';

const Footer = ({radioOn}) => {
    return (
        <div className="footer" >
            <p
                className="currently">
                {radioOn ? "CURRENTLY PLAYING" : "-=|||=-"}
            </p>
            <p
                className="currently-radio">
                {radioOn ? radioOn : "RADIO OFF"}
            </p>
        </div>
    );
}

export default Footer;