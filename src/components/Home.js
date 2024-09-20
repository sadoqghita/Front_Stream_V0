import React from 'react';
import '../css/osahan.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../css/Home.css';

const Home = () => {
  const videos = [
    {
      title: "There are many variations of passages of Lorem",
      thumbnail: "/img/v5.png", 
      duration: "3:50",
      views: "1.8M views",
      date: "11 Months ago",
      category: "Education",
      verified: true,
      videoUrl: "https://www.youtube.com/watch?v=ScMzIvxBSi4" // Lien de la vidéo
    },
    {
      title: "There are many variations of passages of Lorem",
      thumbnail: "/img/v6.png",
      duration: "3:50",
      views: "1.8M views",
      date: "11 Months ago",
      category: "Education",
      verified: false,
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" // Un autre lien de vidéo
    },
  ];

  return (
    <div className="video-block section-padding">
      <div className="row">
        <div className="col-md-12">
          <div className="main-title">
            <h6>Featured Videos</h6>
          </div>
        </div>
        {videos.map((video, index) => (
          <div className="col-xl-3 col-sm-6 mb-3" key={index}>
           <div className="video-card">
  <div className="video-card-image">
    <a className="play-icon" href={video.videoUrl} target="_blank" rel="noopener noreferrer">
      <i className="fas fa-play-circle"></i>
    </a>
    <a href={video.videoUrl} target="_blank" rel="noopener noreferrer">
      <img className="img-fluid" src={video.thumbnail} alt={video.title} />
    </a>
    <div className="time">{video.duration}</div>
  </div>
  <div className="video-card-body">
    <div className="video-title">
      <a href={video.videoUrl} target="_blank" rel="noopener noreferrer">{video.title}</a>
    </div>
    <div className={`video-page ${video.verified ? 'text-success' : 'text-danger'}`}>
      {video.category} 
      <a title="" data-placement="top" data-toggle="tooltip" href="#" data-original-title={video.verified ? 'Verified' : 'Unverified'}>
        <i className={`fas fa-${video.verified ? 'check-circle' : 'frown'} ${video.verified ? 'text-success' : 'text-danger'}`}></i>
      </a>
    </div>
    <div className="video-view">
      {video.views} &nbsp;<i className="fas fa-calendar-alt"></i> {video.date}
    </div>
  </div>
</div>
          </div>
        ))}
      </div>
    </div>
  );    

}

export default Home;