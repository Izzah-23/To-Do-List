"use client"
import React, { useState } from 'react';
const page = () => {

  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [MainTask, setMainTask] = useState([])
  const submitHandler = (e) => {
    e.preventDefault()
    setMainTask([...MainTask, { title, desc }])
    settitle("")
    setdesc("")
    console.log(MainTask)
  };

  const deleteHandler = (i) => {
    let copytask = [...MainTask]
    copytask.splice(i, 1)
    setMainTask(copytask)

  }

  let renderTask = <h2>No task aailable</h2>
  renderTask = MainTask.map((t, i) => {
    return (
      <li key={i} className='flex mb-8 item-center justify-between'>
        <div className=' flex justify-between mb-5 w-2/3'>
          <h5 className='text-2xl font-semibold'>{t.title}</h5>
          <h6 className='text-xl font-semibold'> {t.desc}</h6>
        </div>
        <button onClick={() => { deleteHandler(i) }}
          className='bg-red-500 p-5 text-white rounded px-4 py-2  text-2xl font-bold'>Delete
        </button>
      </li>);
  })
  return (
    <>
      <h1 className='bg-black font-semibold text-white
    p-5 text-5xl text-center'> Izzah's Todo List</h1>

      <form onSubmit={submitHandler}>

        <input
          type="text"
          className='text-2xl border-gray-800 border-2 m-5 px-4 py-2'
          placeholder='Enter task here'
          value={title}
          onChange={(e) => {
            settitle(e.target.value)

          }}
        />

        <input type="text"
          className='text-2xl border-gray-800 border-2 m-5 px-4 py-2'
          placeholder='Enter Description here'
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value)
          }}
        />

        <button className='bg-red-500 text-white rounded px-4 py-2  text-2xl font-bold'>Add Task
        </button>

      </form>

      <hr />
      <div className='p-8 bg-slate-300'>
        <ul>
          {renderTask}
        </ul>
      </div>


    </>
  )
}

export default page
