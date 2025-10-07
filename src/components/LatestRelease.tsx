import cover from '../assets/cover-art.png'
import { FaPlay } from "react-icons/fa";

function LatestRelease() {

  return (
    <div className="latestRelease-container">
        <a href="https://open.spotify.com/track/2jG39S5GE4B4S49d2mACjx?si=2e7c004a3d664a96" target='_blank' className='latest-link'>
            <div className="flex">
                <div className="albumcover">
                    <img className="cover" src={cover}/>
                </div>
                <div className="play-details">
                    <p className="play-details_text">Latest <br/>Release.</p>
                    <div className="play-details_button"><FaPlay className='play-icon'/></div>
                </div>
            </div>
        </a>
    </div>
    
  )
}

export default LatestRelease