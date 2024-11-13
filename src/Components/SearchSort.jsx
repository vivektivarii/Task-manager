import React from 'react';

const SearchSort = ({ searchTerm, setSearchTerm, sortCriteria, setSortCriteria }) => {
  return (
    <div className="flex gap-4 mb-4">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search tasks..."
        className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <select 
        value={sortCriteria}
        onChange={(e) => setSortCriteria(e.target.value)}
        className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="date">Sort by Date</option>
        <option value="priority">Sort by Priority</option>
        <option value="title">Sort by Title</option>
      </select>
    </div>
  );
};

export default SearchSort; 