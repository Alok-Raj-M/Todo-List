import React, { useState } from 'react'

const Todo = () => {
  const [title, setTitle] = useState("");
  const [desk, setDesk] = useState("");
  const [mainTask, setMainTask] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const submitHandel = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      // Edit existing task
      const updatedTasks = [...mainTask];
      updatedTasks[editIndex] = { title, desk, completed: mainTask[editIndex].completed };
      setMainTask(updatedTasks);
      setEditIndex(null);
    } else {
      // Add new task
      setMainTask([...mainTask, { title, desk, completed: false }]);
    }
    setTitle("");
    setDesk("");
  }

  const deleteHandle = (i) => {
    let copytask = [...mainTask];
    copytask.splice(i, 1);
    setMainTask(copytask);
  }

  const editHandle = (i) => {
    setTitle(mainTask[i].title);
    setDesk(mainTask[i].desk);
    setEditIndex(i);
  }

  const toggleComplete = (i) => {
    const updatedTasks = [...mainTask];
    updatedTasks[i].completed = !updatedTasks[i].completed;
    setMainTask(updatedTasks);
  }

  let renderTask = <h2>No Task Available here</h2>;

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className='flex items-center justify-between'>
          <div className='flex gap-[400px] pb-3'>
            <div className='flex items-center gap-4'>
              <input
                type="checkbox"
                checked={t.completed}
                onChange={() => toggleComplete(i)}
                className='w-5 h-5'
              />
              <h5 className={`text-2xl font-semibold ${t.completed ? 'line-through text-gray-500' : ''}`}>{t.title}</h5>
            </div>
            <h6 className={`text-lg font-semibold ${t.completed ? 'line-through text-gray-500' : ''}`}>{t.desk}</h6>
          </div>
          <div className='flex gap-5'>
            <button onClick={() => { deleteHandle(i) }} className='bg-red-900 text-yellow-100 rounded px-4 py-1 active:scale-90'>Delete</button>
            <button onClick={() => { editHandle(i) }} className='bg-blue-900 text-yellow-100 rounded px-4 py-1 active:scale-90'>Edit</button>
          </div>
        </li>
      );
    })
  }

  return (
    <div className='w-[80vw] h-[80vh] rounded bg-slate-200 ml-[10vw] mt-4 overflow-auto'>
      <h1 className='text-2xl text-center p-4'>You can create your task's</h1>
      <div>
        <form onSubmit={submitHandel}>
          <div className='flex m-3 items-center justify-between pr-10'>
            <div className='flex gap-6'>
              <h1 className='text-xl pt-1'>Enter Your Task :</h1>
              <input value={title} onChange={(e) => { setTitle(e.target.value) }} type="text" className='text-2xl border-l-zinc-800 h-10 rounded-lg pl-6 pt-1 pb-1' placeholder='Enter Your Task here !' />
              <input value={desk} onChange={(e) => { setDesk(e.target.value) }} type="text" className='text-2xl border-l-zinc-800 h-10 rounded-lg pl-6 pt-1 pb-1' placeholder='Enter Description here !' />
            </div>
            <div>
              <button className='bg-orange-600 text-white px-4 py-1 active:scale-90 rounded font-bold'>{editIndex !== null ? 'Update Task' : 'Add Task'}</button>
            </div>
          </div>
        </form>
        <hr />
        <div className='p-8 bg-slate-100 m-2 rounded'>
          <ul>
            {renderTask}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Todo
