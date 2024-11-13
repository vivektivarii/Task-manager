import React from 'react';

const TaskForm = ({ newTask, setNewTask, priority, setPriority, addTask }) => {
  return (
    <form onSubmit={addTask} className="flex gap-4 mb-8">
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter new task"
        className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>

      <select 
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option value="low">Low Priority</option>
        <option value="medium">Medium Priority</option>
        <option value="high">High Priority</option>
      </select>

      <button 
        type="submit" 
        className="px-6 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600 transition-colors">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm; 