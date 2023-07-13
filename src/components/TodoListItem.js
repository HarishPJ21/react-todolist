// import { useState, useEffect } from 'react';

function TodoListItem(props) {
  const {todoItems,deleteItem,editItem,completeItem}=props;
  console.log("todoItems:",todoItems)          

  return (
    
    <div className="TodoListItems">
      {todoItems.map((todoItem)=>(
        <div className='todoItem' >
          <h3 className={todoItem.completed? "todo-text line-over":"todo-text"  }>{todoItem.title}</h3>
          {/* delete */}
          <img alt='delete' className='action-icon' src='https://cdn-icons-png.flaticon.com/512/5171/5171793.png' onClick={()=>deleteItem(todoItem.id)} />

          {/* edit */}
          <img alt='edit' className='action-icon' src='https://cdn-icons-png.flaticon.com/512/1159/1159633.png' onClick={()=>editItem(todoItem.id)} />
          
          {/* complete */}
          <img alt='complete' className='action-icon' src='https://cdn-icons-png.flaticon.com/512/709/709510.png' onClick={()=>completeItem(todoItem.id)} />

        </div>
      ))}
      {/* {posts.map((post, index) => (
        <div className="post" key={`post-${index}`}>
          <Link to={`/post/${post.id}`}>
            <h3>{post.title}</h3>
          </Link>

          <p>{post.subTitle}</p>
        </div>
      ))} */}
    </div>
  );
}

export default TodoListItem;
