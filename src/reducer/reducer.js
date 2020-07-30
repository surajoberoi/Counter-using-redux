const initalState = {
    counter : 0,
    results: []
}

const reducer = (state = initalState, action ) => {
    
    switch(action.type){
            case 'INCREMENT' :
            return{
                ...state,
                counter: state.counter + 1
            }

            case 'DECREMENT' :
            return{
                ...state,
                counter: state.counter + 1
            }

            case 'ADD':
            return{
                ...state,
                counter: state.counter + action.payload
            }

            case 'SUBTRACT':
            return{
                ...state,
                counter: state.counter - action.payload
            }

            case 'STORE_RESULT':
                return{
                    ...state,
                    results:state.results.concat({id: new Date(),value:state.counter})
                }
            default: 
                console.log("Default")
        
    }

    return state
}

export default reducer