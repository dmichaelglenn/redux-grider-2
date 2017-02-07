//2 args - state and action. state is not application state, only whatever state this reducer is responsible for 
//es6 syntax - tells state to be null if nothing is passed
export default function(state = null, action) {
    switch(action.type) {
        case 'BOOK_SELECTED':
        return action.payload;
    }
    return state
}