// components/NotesSection.js

import React from 'react';

const NotesSection = () => {
    return (
        <div className="notes-section mt-8">
            <h2 className="text-xl font-semibold mb-4">Notes</h2>
            <div className="bg-gray-50 p-4 rounded">
                <p>Here you can add notes related to the video content.</p>
                {/* Add your notes content here */}
            </div>
        </div>
    );
};

export default NotesSection;
