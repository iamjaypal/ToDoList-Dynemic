import React, { useState } from 'react'
import '../Styles/topbox.css'
function Topbox() {
  const [todolist, settodolist] = useState([]);
  const [key, setKey] = useState(0);
  const [firstvisit, setfirstvisit] = useState(false);
  const [value, setvalue] = useState("");
  const [desvalue, setdesvalue] = useState("")
  const [completed, SetCompeleted] = useState([]);
  function AddTaskName(e) {
    setvalue(e.target.value);
  }
  function DeleteItem(index) {
    var arritems = [...todolist];
    arritems.splice(index, 1);
    settodolist(arritems);
    completed.splice(index, 1);

  }
  function CompleteTask(index) {
    completed.splice(index, 1, true);
    completed.map((item) => (
      console.log(item)
    ))
    SetCompeleted(completed)
    settodolist([...todolist])

  }
  function AddDescription(e) {
    setdesvalue(e.target.value);
  }
  function AddToDo() {
    let obj = {
      id: key,
      name: value,
      desc: desvalue
    }
    setKey(key + 1);
    settodolist([...todolist, obj]);
    setfirstvisit(true);
    SetCompeleted([...completed, false]);
  }
  return (
    <>
      <div className='taskInput'>

        <div className='descriptionbox' id='namebox'>
          <label htmlFor="">Name</label><br />
          <input type="text" onChange={AddTaskName} value={value} name='name' /><br />
        </div>
        <div className='descriptionbox' id='desbox'>
          <label htmlFor="" >Description</label><br />
          <input type="text" name='name' value={desvalue} onChange={AddDescription} />
        </div>
        <button className='btn' onClick={AddToDo}>Add Todo</button>
      </div>

      {(firstvisit) &&
        todolist.map((item, index) => (

          <>
            < div className='tasks'>
              <div className="heading">
                {completed[index] === true ?
                  <>
                    <p className={'line-through'}>{index + 1}. {item.name}</p>
                    <p className={'line-through'}>{item.desc} </p>
                  </>
                  :
                  <>
                    <p>{index + 1}. {item.name}</p>
                    <p>{item.desc} </p>

                  </>
                }
              </div>
              <div className='buttons'>
                {
                  (completed[index] === true) ?
                    <button id='deleteBtn' onClick={() => DeleteItem(index)}>Delete</button>
                    :
                    <>
                      <button id='completeBtn' onClick={() => CompleteTask(index)}>Complete</button>
                      <button id='deleteBtn' onClick={() => DeleteItem(index)}>Delete</button>
                    </>
                }

              </div>
            </div>
          </>
        ))
      }

    </>
  )
}

export default Topbox
