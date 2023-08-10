// const { json } = require("stream-consumers");

const url="https://jsonplaceholder.typicode.com/todos";

// fetch function --- to fetch data from above url
export const  fetchTodo = async() =>{
    const response = await fetch(url);
    const data = await response.json();
    console.log("fetch:",response);
    return data;
}

// add function --- to post data into the Api

export const addTodo= async(todoItem)=>{
    const response = await fetch(url,{
        method:'POST',
        body: JSON.stringify(todoItem),
        headers:{
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
    console.log("add:",response);
}

// delete function --- to delete data from the Api

export const deleteTodo = async (todoID)=>{
    const response = await fetch(`${url+'/'+todoID}`,{
        method:'DELETE',
    });
    console.log("delete:",response);
}

// update function --- to put data into the Api

export const updateTodo = async (todoID)=>{
    const response = await fetch(`${url+'/'+todoID}`,{
        method:'PUT',
    });
    console.log("update:",response);
}
