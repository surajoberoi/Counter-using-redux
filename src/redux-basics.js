const redux = require('redux')

const CreateStore = redux.createStore;

const initalState = {
    counter: 0
}


//REDUCER
const rootReducer = (state = initalState , action) => {
    if(action.type === 'INC_COUNTER') {
        return{
            ...state,
            counter: state.counter + 1 
        }
    }

    if(action.type === 'ADD_COUNTER') {
        return{
            ...state,
            counter: state.counter + action.value 
        }
    }
    return state;
}

//STORE
const Store = redux.createStore(rootReducer);
console.log(Store.getState())


//subscription
Store.subscribe(()=>{
    console.log("[Subscription]", Store.getState())
})


//dispatching Action
Store.dispatch({type: 'INC_COUNTER'})
Store.dispatch({type: 'ADD_COUNTER', value: 10 })
console.log(Store.getState())


