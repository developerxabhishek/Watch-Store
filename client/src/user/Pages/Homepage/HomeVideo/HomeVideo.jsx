import "./HomeVideo.css";
import video from './homevideo.mp4'

const HomeVideo = () => {
  return (
    <>
        <div className="home-video">
        <video width="100%" height="100%"  autoPlay muted loop  className="home-videos">
  <source src={video} type="video/mp4"/>

</video>

        
        </div>
    </>
  )
}

export default HomeVideo;
