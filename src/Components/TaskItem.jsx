import React from 'react';

const TaskItem = ({ task, toggleComplete, deleteTask }) => {
  const getPriorityStyles = (priority) => {
    switch (priority) {
      case 'high':
        return 'border-l-4 border-red-500 bg-red-50';
      case 'medium':
        return 'border-l-4 border-yellow-500 bg-yellow-50';
      case 'low':
        return 'border-l-4 border-green-500 bg-green-50';
      default:
        return 'border-l-4 border-gray-500 bg-gray-50';
    }
  };

  const getPriorityBadgeStyles = (priority) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <li 
      className={`
        flex items-center p-4 mb-2 rounded-lg shadow-sm
        ${getPriorityStyles(task.priority)}
        transform transition-all duration-200 hover:-translate-y-1 hover:shadow-md
        ${task.completed ? 'opacity-75' : ''}
      `}
    >
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(task.id)}
        className="w-5 h-5 mr-4 rounded border-gray-300 focus:ring-2 focus:ring-blue-500"
      />
      <span className={`flex-1 ${task.completed ? 'line-through text-gray-500' : ''}`}>
        {task.title}
      </span>
      <span className={`px-3 py-1 mx-4 text-sm rounded-full font-medium ${getPriorityBadgeStyles(task.priority)}`}>
        {task.priority}
      </span>
      <button 
        onClick={() => deleteTask(task.id)}
        className="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors"
      >
        Delete
      </button>
    </li>
  );
};

export default TaskItem; 