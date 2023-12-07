import React from "react";

const HeaderSection = ({ firstTitle, secondTitle }) => {
    return (
        <>
            <h5>{firstTitle}</h5>
            <h2>{secondTitle}</h2>
        </>
    );
};

export default HeaderSection;
