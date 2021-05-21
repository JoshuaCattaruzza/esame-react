export const setDefault = (todo) =>{
    return {
        type: "SET_TODO",
        payload: todo
    }
    
}
export const deleteTodo = (index) =>{
    return {
        type: "DELETE_TODO",
        payload: index
    }
}

//qua definisco le action che userò in nel reducer