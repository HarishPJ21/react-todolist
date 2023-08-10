import {useState} from 'react';

function CreateTodo(props) {
  const {addItem} = props; 
  const [content,setContent] = useState("");
  function handleChange(e){
    setContent(e.target.value);
  }
    function handleSubmit(e){
        e.preventDefault();
        addItem(content);
        setContent("");
      }
    return (
      <div className="create-post">
        <h1>ToDo List</h1>
        <form onSubmit={handleSubmit}>
            <div className="form-field">
                <input value={content} onChange={handleChange} />
            </div>
            <div className='btn-div'>
              {/* addTodo button */}
            <button className="create-post-btn">Add ToDo</button>
            </div>
        </form>
        
      </div>
    );
  }
  
export default CreateTodo;