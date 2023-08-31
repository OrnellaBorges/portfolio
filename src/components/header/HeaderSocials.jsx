import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/ornellaborges/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/OrnellaBorges" target="_blank">
        {" "}
        <BsGithub />
      </a>
      {/* <a href='https://dribbble.com' target="_blank"></a> */}
    </div>
  );
};

export default HeaderSocials;
