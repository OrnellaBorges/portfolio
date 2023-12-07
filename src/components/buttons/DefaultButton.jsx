import React from "react";

const DefaultButton = ({ text, mode }) => {
    return (
        <button id="button" className={`btn ${mode}`}>
            {text}
        </button>
    );
};

export default DefaultButton;
