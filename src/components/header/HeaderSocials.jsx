import { BsLinkedin, BsGithub, BsFacebook } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="#linkedin" target="_blank">
        <BsLinkedin />
      </a>
      <a href="#github" target="_blank">
        <BsGithub />
      </a>
      <a href="#fb" target="_blank">
        <BsFacebook />
      </a>
    </div>
  );
};

export default HeaderSocials;
