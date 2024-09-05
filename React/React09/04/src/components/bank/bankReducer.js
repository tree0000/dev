function reducer(state, action) {
    // eslint-disable-next-line default-case
    switch(action.type) {
        case 'deposit' :
            return state + action.money;
        case 'withdraw' :
            return state - action.money;
    }
}

export default reducer;