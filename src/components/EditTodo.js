import {useState} from 'react';

function EditTodo(props) {
  const {editValue,save,cancel} = props;
  const [content,setContent] = useState(editValue.title);
  function handleChange(e){
    setContent(e.target.value);
  }
    function handleSubmit(e){
        e.preventDefault();
      }
    return (
      <div className="create-post">
        <h1>ToDo List</h1>
        <form onSubmit={handleSubmit}>
            <div className="form-field">
                <input value={content} onChange={handleChange} />
            </div>
            <div className='btn-div'>
            <button onClick={()=>save(editValue.id,content)} className="create-post-btn">save</button>
            <button onClick={()=>cancel()} className="create-post-btn">cancel</button>
            </div>
        </form>
        
      </div>
    );
  }
  
export default EditTodo;