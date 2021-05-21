
import React, { useState } from "react"
import { withRouter } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import {useDispatch} from "react-redux";
import { setDefault } from "./store/todoAction"


const TodoList = () => {
  const dispatch = useDispatch();
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState({
    title: "",
    description: ""
  })
  const history = useHistory();

  //funzione che aggiunge il task. Richiamo setTasks e passo
  //come param prev che é l'array contente i task precedenti(?) e ritorna l'array con prev "spreaddato" + il currentTask aggiunto alla fine 
  //dispatch->setdefault mi aggiunge la todo corrente allo store con redux (sospetto avvenga qui la duplicazione di cui parlo in todoreducer)
  //come non detto ho capito il problema e l'ho risolt GG
  const addTask = () =>{
    dispatch(setDefault({...currentTask}))
    setTasks((prev) => {
      // dispatch(setDefault({...currentTask}))   <--- il problema era questo
      return [...prev, currentTask]
      
    })
    history.goBack()//hostory.goback fa mi peremtte di fare un "redirect" alla homepage dopo il submit della todo
  }


  return (
    <div>
      <Task
      value={currentTask.title} 
      onChange={(val) =>
         setCurrentTask((prev) =>
         ({
        ...prev,
        title: val
      })
      )}
      /> 
      <Task
      value={currentTask.description} 
      onChange={(val) =>
         setCurrentTask((prev) =>
         ({
        ...prev,
        description: val
      })
      )}
      />
      <button
      onClick={() => addTask()}>Add a Task</button>
    </div>
  );
}

//Questo è il componente che andrà a contenere i task aggiunti alla lista
//prende come param un obj con due elementi "value" e "onChange"(func in cui salvo l'onchange dell'input
const Task = ({value, onChange }) => (
  <input 
  type="text"
  value={value}
  onChange={(e) => onChange(e.target.value)}
  >
  </input>
);
//with router fa si che le pagine siano tra loro "collegate"

export default withRouter(TodoList)





















