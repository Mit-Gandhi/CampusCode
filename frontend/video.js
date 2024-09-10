import { useState, useEffect } from 'react';
import axios from 'axios';

const VideoPage = () => {
  // Replace this with the actual ID of the playlist you want to display
  const playlistId = 'PLdo5W4Nhv31bbKJzrsKfMpo_grxuLl8LU';

  const [playlistData, setPlaylistData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlaylistData = async () => {
      try {
        const response = await axios.get(`/api/youtube/playlist`, {
          params: { playlistId },
        });
        setPlaylistData(response.data.items); // Assuming you're getting a list of videos
      } catch (error) {
        setError('Error fetching playlist data');
      }
    };

    fetchPlaylistData();
  }, [playlistId]);

  if (error) return <p>{error}</p>;
  if (!playlistData) return <p>Loading...</p>;

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Playlist</h1>
      <iframe
        width="100%"
        height="500"
        src={`https://www.youtube.com/embed/videoseries?list=${PLdo5W4Nhv31bbKJzrsKfMpo_grxuLl8LU}`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube Playlist"
      ></iframe>
      <div className="mt-4">
        <p className="text-lg">Below you can find notes and comments related to this playlist.</p>
        {/* You can add more components here like Notes and Comments */}
      </div>
    </div>
  );
};

export default VideoPage;