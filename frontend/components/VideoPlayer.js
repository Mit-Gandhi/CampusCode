// components/VideoPlayer.js

import React from 'react';
import CommentSection from './CommentSection.js';
import NotesSection from './NotesSection';

const VideoPlayer = ({ videoUrl }) => {
    return (
        <div className="video-player-container">
            <div className="video-container mb-8">
                <iframe
                    width="100%"
                    height="500"
                    src={videoUrl}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <CommentSection />
            <NotesSection />
        </div>
    );
};

export default VideoPlayer;