import { useState } from 'react'
import TaskForm from './components/TaskForm'
import SearchSort from './components/SearchSort'
import TaskList from './components/TaskList'
import './App.css'

function App() {
  const [tasks, setTasks] = useState(() => {
    
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [newTask, setNewTask] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortCriteria, setSortCriteria] = useState('date'); 
  const [priority, setPriority] = useState('medium'); 

  const addTask = (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    
    const task = {
      id: Date.now(),
      title: newTask.trim(),
      completed: false,
      priority: priority,
      createdAt: new Date().toISOString()
    };
    
    const updatedTasks = [...tasks, task];
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    setNewTask('');
  };

  const deleteTask = (taskId) => { 
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const toggleComplete = (taskId) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const filteredAndSortedTasks = tasks
    .filter(task => 
      task.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortCriteria) {
        case 'priority':
          const priorityOrder = { high: 3, medium: 2, low: 1 };
          return priorityOrder[b.priority] - priorityOrder[a.priority];
        case 'title':
          return a.title.localeCompare(b.title);
        default: // 'date'
          return b.id - a.id;
      }
    });

  return (
    <div className="container mx-auto max-w-3xl px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Task Manager </h1>
      
      <SearchSort
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        sortCriteria={sortCriteria}
        setSortCriteria={setSortCriteria}
      />

      <TaskForm
        newTask={newTask}
        setNewTask={setNewTask}
        priority={priority}
        setPriority={setPriority}
        addTask={addTask}
      />
      <TaskList
        tasks={filteredAndSortedTasks}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
      />
    </div>
  )
}

export default App
