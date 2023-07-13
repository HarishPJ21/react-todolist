const { json } = require("stream/consumers");

url="https://jsonplaceholder.typicode.com/todos";

const fetch = async() =>{
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

const addTodo= async(todoItem)=>{
    const response = await fetch(url,{
        method:'POST',
        body: JSON.stringify(todoItem),
        headers:{
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
}

const deleteTodo = async (todoID)=>{
    const response = await fetch(`${url+'/'+todoID}`,{
        method:'DELETE',
    });
}

const updateTodo = async (todoID)=>{
    const response = await fetch(`${url+'/'+todoID}`,{
        method:'PUT',
    });
}
