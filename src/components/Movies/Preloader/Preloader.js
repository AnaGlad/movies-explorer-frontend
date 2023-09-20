import React from 'react'
import './Preloader.css'

const Preloader = (isActivePreloader) => {
    return (
        <div className="preloader" isActivePreloader={isActivePreloader}>
            <div className="preloader__container">
                <span className="preloader__round"></span>
            </div>
        </div>
    )
};

export default Preloader
