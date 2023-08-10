import { useEffect, useState } from 'react';
import {  EditTodo,TodoListItem,CreateTodo } from './'; 
import { addTodo, deleteTodo, updateTodo } from '../ApiCalls';


function App() {
  let new_id=201;
  const [todoItems, setTodoItems] = useState([]);
  const [editValue,setEditValue]=useState();
  const [edit,setEdit]=useState(false);
  console.log("edit:",edit);

  function addItem(title){
    const newTodoItem = {
      "userId": 1,
      "id": new_id++,
      "title": title,
      "completed": false
    }
    console.log("newitem:",newTodoItem);  
    setTodoItems([newTodoItem,...todoItems]);
    console.log("additem:",todoItems);  
    addTodo(newTodoItem);
  }
  function deleteItem(todoID){
    setTodoItems(todoItems.filter((todoItem)=>todoItem.id!==todoID));
    deleteTodo(todoID);
  }
  function editItem(todoID){
    const ev=todoItems.find((todoItem)=>todoItem.id===todoID);
    console.log("ev:",ev)
    setEditValue(ev);
    setEdit(true);

    // setTodoItems()
  }
  function save(todoID, updatedTitle){
    console.log("save");
    setTodoItems(todoItems.map((todoItem)=>{
      if(todoItem.id===todoID)
       todoItem.title = updatedTitle 
      return todoItem;
    }));
    setEdit(false);
    updateTodo(todoID);
  }
  function cancel(){
    console.log("cancel");
    setEdit(false);
  }  


  function completeItem(todoID){
    // console.log("completeItem:", todoID);
    setTodoItems(todoItems.map((todoItem)=>{
      if(todoItem.id===todoID)
       todoItem.completed = !todoItem.completed 
      return todoItem;
    }));
  }

  useEffect(() => {
    const url="https://jsonplaceholder.typicode.com/todos/?userId=1";
    fetch(url).then((Response)=>Response.json()).then((data)=>{
      setTodoItems(data);
    })
    // console.log("useEffect:",todoItems);
  }, []);
      // editTodoValue=todoItems.filter((todoItem)=>todoItem.id===todoID);
    // console.log("editTodoValue:");  
  return (
    <div className="container">
      {edit && <EditTodo editValue={editValue} save={save} cancel={cancel}/>}
      {!edit && <CreateTodo addItem={addItem} />}
      <TodoListItem todoItems={todoItems} completeItem={completeItem} deleteItem={deleteItem} editItem={editItem}/>
    </div>
  );
}

export default App;
