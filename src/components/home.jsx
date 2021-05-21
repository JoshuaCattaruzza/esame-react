import React from 'react';
import {withRouter} from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from 'react'
import { deleteTodo } from "./store/todoAction"
import {useDispatch} from "react-redux";

//home usa useSelector per "tirare giu" lo state e lo mappa nella tasklist
//delete task funzionava ma senza redux ovviamente
//con history.props invece cambio rotta e vado alla pagina dove si aggiungono le todo
const Home = (props) =>{

const state = useSelector(state => state.todos)
const [tasks, setTasks] = useState([]); //use state è l'hook che mi permette di settare le variabili di stato in un comp funzioanle in qeusto caso mi setta le todo in tasks con il setTask  
const dispatch = useDispatch();

useEffect(() =>
{
    setTasks(state);
},

[])
const TaskList = ({tasks, removeTask}) =>(
    <>
         {tasks.map((todo, index)=>{
            return (
            <div key={todo.is}>
            <h3>Title: {todo.title}</h3>
            <h4>Description: {todo.description}</h4>
            <button
      onClick={()=> removeTask(index)}
      >
        Done
      </button>
            </div>
            )
        })}
    </>
  )

const deleteTask = (index) =>{
    dispatch(deleteTodo(index));
  }
    return (
        <>
        <h1>You have these many tasks todo:</h1>
        <TaskList
        tasks={tasks}
        removeTask={(index) => deleteTask(index)}
        />
        <button
        onClick={
            ()=>{
                props.history.push("/addtodo")
            }
        }
        >
            Add a new Todo
        </button>
        </>
    )
}



export default withRouter(Home);


