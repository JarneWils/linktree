import { AiFillInstagram } from "react-icons/ai";
import { AiFillTikTok } from "react-icons/ai";
import { TbBrandYoutubeFilled } from "react-icons/tb";


function Header() {
  const logo = "public/images/Logo.png"
  return (
    <div className="header-container">
        <div className="logo-container">
            <img src={logo} className="logo"/>
        </div>
        <div className="social-icons">
            <a href="https://www.instagram.com/__damp__?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank"><AiFillInstagram  className="social-icon" size={"3.5vh"}/></a>
            <a href="https://www.youtube.com/@DAMP-" target="_blank"><TbBrandYoutubeFilled   className="social-icon" size={"3.5vh"}/></a>
            <a href="https://www.tiktok.com/@damp3670?is_from_webapp=1&sender_device=pc" target="_blank"><AiFillTikTok  className="social-icon" size={"3.5vh"}/></a>
        </div>
    </div>
  )
}

export default Header