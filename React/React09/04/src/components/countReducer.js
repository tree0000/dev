function countReducer(state, action) {
    switch(action.type) {
        case 'INCREMENT' :
            // return state + 1;
            return action.icon;
        case 'DECREMENT' :
            // return state - 1;
            return action.icon;
        default :
        return state;
    }
}

export default countReducer;