import React from 'react';
//import { Link } from 'react-router-dom';

import '../css/VideoPage.css';
import '../css/osahan.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

class VideoPage extends React.Component {
  state = {
    videos: [
      {
        id: 1,
        title: "Here are many variati of passages of Lorem",
        views: "1.8M views",
        time: "11 Months ago",
        image: "/img/s6.png",
        duration: "3:50",
        videoUrl: "https://www.youtube.com/watch?v=ScMzIvxBSi4" // Lien de la vidéo
      },
      {
        id: 2,
        title: "Duis aute irure dolor in reprehenderit in.",
        views: "1.8M views",
        time: "11 Months ago",
        image: "/img/s8.png",
        duration: "3:50",
        videoUrl: "https://www.youtube.com/watch?v=ScMzIvxBSi4" // Lien de la vidéo
      }
      // Ajoutez d'autres vidéos ici si nécessaire
    ]
  };

  /*correspond à la fonction de rendu de la carte vidéo*/
  renderVideoCard = (video) => (
<div className="col-xl-8 mb-4" key={video.id}>
<div className="video-card">
        <div className="video-card-image">
          <a className="play-icon" href={video.videoUrl} target="_blank" rel="noopener noreferrer">
            <i className="fas fa-play-circle"></i>
          </a>
          <a href={video.videoUrl} target="_blank" rel="noopener noreferrer">
            <img className="img-fluid" src={video.image} alt={video.title} />
          </a>
          <div className="time">{video.duration}</div>
        </div>
        <div className="video-card-body">
          <div className="video-title">
            <a href={video.videoUrl} target="_blank" rel="noopener noreferrer">{video.title}</a>
          </div>
          <div className="video-view">
            {video.views} &nbsp;<i className="fas fa-calendar-alt"></i> {video.time}
          </div>
        </div>
      </div>
    </div>
  );

  render() {
    return (
      <div className="container-fluid video-page">
        <div className="row">
          <div className="col-md-8">
            <div className="video-container">
              <iframe
                width="50%"
                height="90 %" 
                src="https://www.youtube.com/embed/ScMzIvxBSi4"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="video-details">
              <h5>Istanbul aerial view, drone view</h5>
              <p>2,729,347 views • Published on Aug 10, 2018</p>
              <hr />
              <div className="video-channel-info">
                <div className="channel-info">
                  <img src="/img/channel-logo.png" alt="Channel" className="channel-logo" />
                  <div>
                    <h6>Osahan Channel</h6>
                    <p>Published on Aug 10, 2018</p>
                  </div>
                </div>
                <button className="subscribe-btn">Subscribe 1.4M</button>
              </div>
              <hr />
              <div className="video-description">
                <h6>About :</h6>
                <p>It is a long established fact that a reader will be distracted...</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <h6>Up Next</h6>
            {this.state.videos.map(this.renderVideoCard)}
          </div>
        </div>
      </div>
    );
  }
}

export default VideoPage;
