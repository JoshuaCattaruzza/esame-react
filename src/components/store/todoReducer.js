const initialState = {
    todos:[]
}

//actions definite per eliminare e aggiungere item allo store
//bug: delete non funziona, o meglio riceve correttamente l'index da filtare ma non lo elimina (vorrei capiure perchè)
    //settodo aggiunge correttamente gli elementi ma li duplica(anche qui vorrei capire perchè)
 const setStore = (state = initialState, action) => {
    switch(action.type){
        case "SET_TODO":
            return {
                todos: [ action.payload,
                 ...state.todos
                ]
            }
        case "DELETE_TODO":
            return {
                todos: [state.todos.filter((index) => index !== action.payload),
                    ...state.todos
                        
                ]
            
        
            }
        default: 
            return state
    }
    
}

export default setStore