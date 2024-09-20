import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import VideoPage from './components/VideoPage';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/osahan.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  return (
    <Router>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/video" element={<VideoPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
