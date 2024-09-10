import React, { useState } from 'react';
import Layout from '../../components/Layouts';

const VideoCard = ({ title, description, playlistId }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 mb-6">
      <iframe
        className="w-full h-64 rounded-lg"
        src={`https://www.youtube.com/embed/videoseries?list=${playlistId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <h2 className="text-2xl font-bold mt-4">{title}</h2>
      <p className="text-gray-700 mt-2">{description}</p>
    </div>
  );
};

export default function Videos() {
  // Add subjects with custom video titles
  const videoList = [
    {
      title: 'Laplace Transform',
      description: 'Engineering Maths lectures covering core topics.',
      playlistId: 'PLT3bOBUU3L9gLQHOIch6y-gvXrSGAnwzg',
      subject: 'maths-3',
    },
    {
      title: 'Inverse Laplace Transform',
      description: 'Engineering Maths lectures covering core topics.',
      playlistId: 'PLKS7ZMKnbPrQDOTrKMxawIXENqhLWWvgT',
      subject: 'maths-3',
    },
    {
      title: 'Fourier Series',
      description: 'Engineering Maths lectures covering core topics.',
      playlistId: 'PLT3bOBUU3L9garIMWIqgAJ6wqBUe4ckFm',
      subject: 'maths-3',
    },
    {
      title: 'Complex Variables',
      description: 'Engineering Maths lectures covering core topics.',
      playlistId: 'PLKS7ZMKnbPrTe_ayBsypP_36cH34NOylM',
      subject: 'maths-3',
    },
    {
      title: 'Statistical Techniques',
      description: 'Engineering Maths lectures covering core topics.',
      playlistId: 'PLT3bOBUU3L9h4StzmTBjUnzosZYpCKcKZ',
      subject: 'maths-3',
    },
    {
      title: 'Probability',
      description: 'Engineering Maths lectures covering core topics.',
      playlistId: 'PLT3bOBUU3L9jex8hXzVAszMS8NOILa7IV',
      subject: 'maths-3',
    },

    {
      title: 'Discrete Structures and Graph Theory',
      description: 'Comprehensive videos on DSGT concepts.',
      playlistId: 'PLT3bOBUU3L9i_pVVExjnghQn5AQygFZnh',
      subject: 'dsgt',
    },

    {
      title: 'Data Structure',
      description: 'Comprehensive videos on DS concepts.',
      playlistId: 'PLdo5W4Nhv31bbKJzrsKfMpo_grxuLl8LU',
      subject: 'dsa',
    },

    {
      title: 'Digital Logic & Computer Organization and Architecture-1',
      description: 'Learn about DLCA through these tutorials.',
      playlistId: 'PLbGui_ZYuhigWLoEeaGUHvz1ynoqD6RtZ',
      subject: 'dlca',
    },
    {
      title: 'Digital Logic & Computer Organization and Architecture-2',
      description: 'Learn about DLCA through these tutorials.',
      playlistId: 'PLxCzCOWd7aiHMonh3G6QNKq53C6oNXGrX',
      subject: 'dlca',
    },

    {
      title: 'Computer Graphics',
      description: 'Learn about CG through these tutorials.',
      playlistId: 'PLYwpaL_SFmcAtxMe7ahYC4ZYjQHun_b-T',
      subject: 'graphics',
    },

    {
      title: 'Linear Algebra (Theory of Matrices)',
      description: 'Engineering Maths lectures covering core topics.',
      playlistId: 'PLKS7ZMKnbPrQ9iPsuRgqpmoHkKTq9NVuA',
      subject: 'maths-4',
    },
    {
      title: 'Complex Integration',
      description: 'Engineering Maths lectures covering core topics.',
      playlistId: 'PL5Dqs90qDljWlvUJ-YmjMsjkAANOagCk7',
      subject: 'maths-4',
    },
    {
      title: 'Z Transform',
      description: 'Engineering Maths lectures covering core topics.',
      playlistId: 'PLT3bOBUU3L9g-cGxT8NCrpd36TrUx9xqQ',
      subject: 'maths-4',
    },
    {
      title: 'Chapter 4-6',
      description: 'Engineering Maths lectures covering core topics.',
      playlistId: 'PLm_MSClsnwm8ZKue0FAIDObAVKd3dfBSh',
      subject: 'maths-4',
    },

    {
      title: 'Analysis of Algorithm',
      description: 'Detailed videos on AOA fundamentals.',
      playlistId: 'PL1QH9gyQXfgs7foRxIbIH8wmJyDh5QzAm',
      subject: 'aoa',
    },

    {
      title: 'Database Management System',
      description: 'Detailed videos on DBMS fundamentals.',
      playlistId: 'PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y',
      subject: 'dbms',
    },

    {
      title: 'Operating Systems',
      description: 'Detailed videos on Operating System fundamentals.',
      playlistId: 'PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p',
      subject: 'os',
    },

    {
      title: 'Microprocessor-1',
      description: 'Detailed videos on MICROPROCESSOR fundamentals.',
      playlistId: 'PLfzBO7vcQZ1L1wE17y07ZR4Vxw0EHibTM',
      subject: 'mp',
    },
    {
      title: 'Microprocessor-2',
      description: 'Detailed videos on MICROPROCESSOR fundamentals.',
      playlistId: 'PLYwpaL_SFmcD82Lrem70mQUvwPdAAWjI9',
      subject: 'mp',
    },
  ];

  // State to handle selected subject
  const [selectedSubject, setSelectedSubject] = useState('all');

  // Function to filter videos based on selected subject
  const filteredVideos = videoList.filter((video) => {
    return selectedSubject === 'all' || video.subject === selectedSubject;
  });

  // Function to handle dropdown change
  const handleSubjectChange = (e) => {
    setSelectedSubject(e.target.value);
  };

  // Get the name of the subject based on selection
  const getSubjectName = () => {
    if (selectedSubject === 'maths-3') return 'Engineering Maths-III';
    if (selectedSubject === 'maths-4') return 'Engineering Maths-IV';
    if (selectedSubject === 'dsgt') return 'Discrete Structures and Graph Theory';
    if (selectedSubject === 'dsa') return 'Data Structure';
    if (selectedSubject === 'dlca') return 'Digital Logic & Computer Organization and Architecture';
    if (selectedSubject === 'graphics') return 'Computer Graphics';
    if (selectedSubject === 'aoa') return 'Analysis of Algorithm';
    if (selectedSubject === 'os') return 'Operating Systems';
    if (selectedSubject === 'mp') return 'Microprocessor';
    if (selectedSubject === 'dbms') return 'Database Management System';
    return 'All Subjects'; // Default for all subjects
  };

  return (
    <Layout>
      {/* Subject Title */}
      <h1 className="text-4xl font-bold mb-6 text-center">
        {selectedSubject === 'all' ? 'Video Playlists' : getSubjectName()}
      </h1>

      {/* Dropdown for subject selection */}
      <div className="flex justify-end mb-6">
        <select
          value={selectedSubject}
          onChange={handleSubjectChange}
          className="p-2 border rounded shadow"
        >
          <option value="all">All Subjects</option>
          <option value="maths-3">Engineering Maths-III</option>
          <option value="dsa">Data Structure</option>
          <option value="graphics">Computer Graphics</option>
          <option value="dsgt">Discrete Structures and Graph Theory</option>
          <option value="dlca">Digital Logic & Computer Organization and Architecture</option>
          <option value="maths-4">Engineering Maths-IV</option>
          <option value="aoa">Analysis of Algorithm</option>
          <option value="os">Operating Systems</option>
          <option value="mp">Microprocessor</option>
          <option value="dbms">Database Management System</option>
          {/* Add more subjects as needed */}
        </select>
      </div>

      {/* Display filtered videos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVideos.length > 0 ? (
          filteredVideos.map((video) => (
            <VideoCard key={video.playlistId} {...video} />
          ))
        ) : (
          <p className="text-center text-gray-500">No videos available for this subject.</p>
        )}
      </div>
    </Layout>
  );
}
