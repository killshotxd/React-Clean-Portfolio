/* eslint-disable */
import "./nav.css";
import { HiHome, HiUser, HiBookOpen, HiContact } from "react-icons/hi";
import { MdContacts } from "react-icons/md";
import { RiServiceLine } from "react-icons/ri";

import { useState } from "react";

const Nav = () => {
  const [activeNow, setActiveNow] = useState("#");

  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNow("#")}
        className={activeNow === "#" ? "active" : ""}
      >
        <HiHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNow("#about")}
        className={activeNow === "#about" ? "active" : ""}
      >
        <HiUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNow("#experience")}
        className={activeNow === "#experience" ? "active" : ""}
      >
        <HiBookOpen />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNow("#services")}
        className={activeNow === "#services" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNow("#contact")}
        className={activeNow === "#contact" ? "active" : ""}
      >
        <MdContacts />
      </a>
    </nav>
  );
};

export default Nav;
