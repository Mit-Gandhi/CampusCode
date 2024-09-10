const Notes = ({ notes }) => {
    return (
      <div className="notes-section mt-8">
        <h2 className="text-2xl font-bold mb-4">Notes</h2>
        <p className="text-gray-800">{notes}</p>
      </div>
    );
  };
  
  export default Notes;
  