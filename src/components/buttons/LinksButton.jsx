import React from "react";

const LinksButton = () => {
    return (
        <div className="portfolio__item-cta">
            <a href={link} className="btn">
                Github
            </a>
            <a href="#contact" className="btn btn-primary">
                Let&apos;s talk
            </a>
            {/* <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a> */}
        </div>
    );
};

export default LinksButton;
