import React, { useState } from 'react';
import { RiCloseLine } from 'react-icons/ri';

const EditTask = ({ setIsEditing, updateTask, taskInfo }) => {
  const { id, name, description, priority } = taskInfo;

  const [taskName, setTaskName] = useState(name);
  const [taskDesc, setTaskDesc] = useState(description);
  const [taskPriority, setTaskPriority] = useState(priority);

  const handleUpdateTask = () => {
    if (!taskName) return;

    const taskToUpdate = {
      id: id,
      name: taskName,
      description: taskDesc,
      priority: taskPriority,
    };

    updateTask(taskToUpdate);

    setIsEditing(false);
  };

  return (
    <div className='w-screen'>
      <div
        onClick={() => setIsEditing(false)}
        className='bg-black/20 w-screen h-screen z-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
      />
      <div className='fixed w-1/2 top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2'>
        <div className='w-full mx-auto p-5 bg-white text-white z-10 rounded-2xl shadow-lg'>
          <div className='h-12 bg-white overflow-hidden rounded-tl-3xl rounded-tr-3xl'>
            <div className='font-extrabold m-0 p-[10px] text-[#2c3e50]  text-xl text-center'>
              Update task
            </div>
          </div>
          <button
            className='font-medium p-1 px-2 rounded-lg text-lg text-[#2c3e50] bg-white transition-all duration-[250ms] shadow-lg absolute right-0 top-0 self-end -mt-[7px] -mr-[7px] '
            onClick={() => setIsEditing(false)}
          >
            <RiCloseLine className='-mb-1' size={40} />
          </button>
          <div className='p-[10px] text-sm text-[#2c3e50] text-center'>
            <form
              onSubmit={(e) => e.preventDefault()}
              className='flex flex-col  w-1/2 items-stretch mx-auto m-5 p-5 border rounded-md'
            >
              <label className='font-bold mb-1 self-start' htmlFor='taskName'>
                Task Name:
              </label>
              <input
                type='text'
                id='taskName'
                defaultValue={name}
                onChange={(e) => setTaskName(e.target.value)}
                className='mb-[10px] p-2 rounded-md border '
                placeholder='Enter task name'
                required
              />
              <label className='font-bold mb-1 self-start' htmlFor='taskDescription'>
                Task Description:
              </label>
              <textarea
                id='taskDescription'
                rows={4}
                defaultValue={description}
                className='mb-[10px] p-1 rounded-md border '
                placeholder='Enter task description'
                onChange={(e) => setTaskDesc(e.target.value)}
              />
              <label className='font-bold mb-1 self-start' htmlFor='priority'>
                Priority:
              </label>
              <select
                className='mb-[10px] p-1 rounded-md border'
                defaultValue={priority}
                onChange={(e) => setTaskPriority(e.target.value)}
                id='priority'
              >
                <option value='low'>Low</option>
                <option value='medium'>Medium</option>
                <option value='high'>High</option>
              </select>
              <button
                onClick={handleUpdateTask}
                className='bg-[#007bff] text-white rounded-md py-2 px-5 hover:bg-[#0069d9]'
              >
                Update Task
              </button>
            </form>
          </div>
          <div className='absolute bottom-[2px] mb-[10px] w-full'></div>
        </div>
      </div>
    </div>
  );
};

export default EditTask;
