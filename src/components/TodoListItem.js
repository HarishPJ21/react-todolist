// import { useState, useEffect } from 'react';

function TodoListItem(props) {
  const {todoItems,deleteItem,editItem,completeItem}=props;
  console.log("todoItems:",todoItems)          

  return (
    
    <div className="todoListItems container">
      {todoItems.map((todoItem,index)=>(
        <div key={index} className='todoItem' >
          <h3 className={todoItem.completed? "todo-text line-over":"todo-text"  }>{todoItem.title}</h3>
          {/* delete */}
          <div>
          <img alt='delete' className='action-icon' src='https://cdn-icons-png.flaticon.com/512/5171/5171793.png' onClick={()=>deleteItem(todoItem.id)} />

          {/* edit */}
          <img alt='edit' className='action-icon' src='https://cdn-icons-png.flaticon.com/512/1159/1159633.png' onClick={()=>editItem(todoItem.id)} />
          
          {/* complete */}
          <img alt='complete' className='action-icon' src='https://cdn-icons-png.flaticon.com/512/709/709510.png' onClick={()=>completeItem(todoItem.id)} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoListItem;
