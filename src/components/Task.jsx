import React, { useState } from 'react';
import { MdOutlineModeEdit } from 'react-icons/md';
import { MdDeleteOutline } from 'react-icons/md';
import EditTask from './EditTask';

const Task = ({ task, onComplete, onDelete, handleUpdateTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <div className='flex shadow-xl p-6 w-full  items-center justify-between'>
      <label className={`flex-1 font-semibold ${task.completed ? 'line-through' : ''}  `}>
        <input
          type='checkbox'
          className='mr-2'
          checked={task.completed}
          onChange={() => onComplete(task)}
        />
        {task.name}
      </label>
      <p className={`ml-5 flex-1  text-start ${task.completed ? 'line-through' : ''}  `}>
        {task.description}
      </p>

      <p
        className={` px-4 p-1 flex-1/2 text-sm rounded-md text-center ${
          task.priority == 'low'
            ? 'bg-yellow-200'
            : task.priority == 'medium'
            ? 'bg-orange-300'
            : 'bg-red-400'
        } `}
      >
        {task.priority}
      </p>
      <div className='flex-1 flex items-center justify-end gap-2  '>
        <div className='cursor-pointer bg-yellow-300 rounded-xl  p-1 px-3'>
          <MdOutlineModeEdit size={24} onClick={() => setIsEditing(true)} />
        </div>
        <div className='cursor-pointer bg-red-500 rounded-xl  p-1 px-3'>
          <MdDeleteOutline
            className='cursor-pointer text-gray-100'
            size={24}
            onClick={() => onDelete(task)}
          />
        </div>
      </div>
      {isEditing && (
        <EditTask taskInfo={task} setIsEditing={setIsEditing} updateTask={handleUpdateTask} />
      )}
    </div>
  );
};

export default Task;
