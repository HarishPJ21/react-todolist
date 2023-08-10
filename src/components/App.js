import { useEffect, useState } from 'react';
import {  EditTodo,TodoListItem,CreateTodo } from './'; 
import { addTodo, deleteTodo, updateTodo } from '../ApiCalls';


function App() {
  let new_id=201;
  // todoItems is used to store all the todo elements in an array
  const [todoItems, setTodoItems] = useState([]);

  // editValue is for storing and passing the editted value 
  const [editValue,setEditValue]=useState();

  // edit is to find if it is under edit state or not
  const [edit,setEdit]=useState(false);

  //this function is to add item a todo to the existing list
  function addItem(title){
    const newTodoItem = {
      "userId": 1,
      "id": new_id++,
      "title": title,
      "completed": false
    }
    // console.log("newitem:",newTodoItem);  
    setTodoItems([newTodoItem,...todoItems]);
    // console.log("additem:",todoItems);  
    addTodo(newTodoItem);
  }

  //this function is to delete item a todo to the existing list
  function deleteItem(todoID){
    setTodoItems(todoItems.filter((todoItem)=>todoItem.id!==todoID));
    deleteTodo(todoID);
  }

  //this function is to edit item in the existing list

  function editItem(todoID){
    const ev=todoItems.find((todoItem)=>todoItem.id===todoID);
    // console.log("ev:",ev)
    setEditValue(ev);
    setEdit(true);

    // setTodoItems()
  }

  //this function is to save the edited item in the existing list

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

  //this function is to cancel the edit item

  function cancel(){
    // console.log("cancel");
    setEdit(false);
  }  

  //this function is to mark the todo as complete

  function completeItem(todoID){
    // console.log("completeItem:", todoID);
    setTodoItems(todoItems.map((todoItem)=>{
      if(todoItem.id===todoID)
       todoItem.completed = !todoItem.completed 
      return todoItem;
    }));
  }

  //this will run for the first time on reloading
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
      {/* edittodo to be shown on edit is true */}
      {edit && <EditTodo editValue={editValue} save={save} cancel={cancel}/>}
      {/* create to be shown on edit is false */}
      {!edit && <CreateTodo addItem={addItem} />}
      
      <TodoListItem todoItems={todoItems} completeItem={completeItem} deleteItem={deleteItem} editItem={editItem}/>
    </div>
  );
}

export default App;
