import React, { useEffect, useState } from 'react';
import Task from './Task';
import AddTask from './AddTask';
import { v4 as uuidv4 } from 'uuid';

const taskList = [
  [
    { id: 1, name: 'Task 1', description: 'This is task 1', priority: 'low', completed: false },
    {
      id: 2,
      name: 'Task 2',
      description: 'This is task 2',
      priority: 'high',
      completed: false,
    },
    {
      id: 3,
      name: 'Task 3',
      description: 'This is task 3',
      priority: 'medium',
      completed: false,
    },
  ],
];

const TaskList = () => {
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem('allTasks')) || taskList;
  });

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('allTasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleCompleteTask = (task) => {
    setTasks(
      tasks.map((item) => (item.id === task.id ? { ...item, completed: !item.completed } : item))
    );
  };

  const handleCreateTask = (task) => {
    if (task.name.trim() !== '') {
      const newTask = {
        id: uuidv4(),
        name: task.name,
        description: task.description,
        priority: task.priority,
        completed: false,
      };

      setTasks([...tasks, newTask]);
    }
  };

  const handleUpdateTask = (task) => {
    setTasks(
      tasks.map((t) =>
        t.id === task.id
          ? { ...t, name: task.name, description: task.description, priority: task.priority }
          : t
      )
    );
  };

  const handleDelete = (task) => {
    setTasks(tasks.filter((t) => t.id !== task.id));
  };

  return (
    <div className='w-1/2 mx-auto my-20 '>
      <button
        onClick={() => setIsOpen(true)}
        className='p-2 bg-green-400 w-1/4 block mx-auto  rounded-md'
      >
        Add a new task
      </button>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onComplete={handleCompleteTask}
          handleUpdateTask={handleUpdateTask}
          onDelete={handleDelete}
        />
      ))}
      {isOpen && <AddTask setIsOpen={setIsOpen} addTask={handleCreateTask} />}
    </div>
  );
};

export default TaskList;
