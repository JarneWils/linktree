import { SiSoundcloud } from "react-icons/si";
import { SiSpotify } from "react-icons/si";

function Platforms() {

  return (
    <div className="platforms-container">
      <a href="https://soundcloud.com/damp-3670?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" className="soundcloud-container" target="_blank">
          <SiSoundcloud  className="soundcloud-icon" size={70}/>
      </a>
      <a href="https://open.spotify.com/artist/3s4SjE8neU2R1WIUE09rkC?si=P6PHDpI2SsOoCmEeiyZRzQ" className="spotify-container" target="_blank">
        <SiSpotify className="spotify-icon" size={50}/>
      </a>
    </div>
  )
}

export default Platforms