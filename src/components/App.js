import { useEffect, useState } from 'react';
import {  TodoListItem,CreateTodo,PostDetail } from './'; 
import { addItem } from './TodoListItem';


function App() {
  let new_id=201;
  const [todoItems, setTodoItems] = useState([]);

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
  }
  function deleteItem(todoID){
    setTodoItems(todoItems.filter((todoItem)=>todoItem.id!==todoID));
  }
  function editItem(todoID){
      // setTodoItems()
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
    console.log(todoItems);
  }, []);
  
  return (
    <div className="container">
      <CreateTodo addItem={addItem} />
      <TodoListItem todoItems={todoItems} completeItem={completeItem} deleteItem={deleteItem} editItem={editItem}/>
    </div>
  );
}

export default App;
