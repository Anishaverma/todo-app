import React, { useState } from 'react'
import { TodoItem } from './TodoItem';


export const Todo = () => {
    const [text, setText] = useState("");
    const [description, setDescription] = useState("");
    const [SerialNo, setSno] = useState(0);
    const [taskList, setTaskList] = useState([]);

    // on click function to add item to the list
    const addTask = () => {
        if (text.length > 0 && description.length > 0) {
            setTaskList((items) => {
                return (
                    [...items, {
                        id: Math.random(),
                        title: [text],
                        relatedDate: [description]

                    }]
                )

            })

            setSno(SerialNo + 1);
            setText("");
            setDescription("");
           
        }
        else {
            alert("Please Enter Task First")
        }
    }

    const keyDown = (event) => {  
       
        if(event.key ==='Enter'){
            addTask();
        }
    }

    // on change input function for adding task
    const addItems = (event) => {
        setText(
            event.target.value);

    }

    // onchange input function for adding discription
    const addDiscription = (event) => {
        setDescription(event.target.value);
    }
    //delete task 
    const deleteTask = (id) => {

        setTaskList(taskList.filter((task, idx) => {
            return idx !== id;
        }))
    }

    //deleteAll task
    const deleteAllTask = (e) => {       
        setTaskList([]);

    }
    return (
        <div className='container my-5 todos'>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Add Task</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={"e.g - exercise"} onChange={addItems} onKeyPress={keyDown}  name="text" value={text} /><br />
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description" aria-describedby="emailHelp" placeholder={"e.g - walking , yoga , cardio"} onChange={addDiscription} onKeyPress={keyDown} name="discription" value={description} />
                    <div id="emailHelp" className="form-text" >Please add the activity associated with the task</div>
                </div>


                <button type="button" id='button' className="btn btn-primary" onClick={() => addTask()}>Add</button>
            </form> <br />
            <ol>

                {taskList.map((tasks, idx) => <>
                    <li key = {tasks.id}><input className='form-check-input' type="checkbox" id='checkbox' value={""} />{"  "}<b> {tasks.title} </b>
                        <ul id='ul'><li >{"-"}{tasks.relatedDate}</li></ul>
                    </li>
                    <button className="btn btn-danger btn-sm" id="button" onClick={() => deleteTask(idx)}>Delete</button>
                </>
                )}
                {
                    taskList.length > 0 ?
                        <button className="btn btn-danger btn-sm" id="btn" onClick={deleteAllTask}>Delete All</button> :
                        <p id="emptytask">No Tasks to do</p>
                }


            </ol>

            <TodoItem />
        </div>
    )
}
