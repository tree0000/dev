function reducer(state, action) {

    // eslint-disable-next-line default-case
    switch(action.type) {
        case 'ADD' : {
            const newMember = {
                name : action.name,
                age : action.age,
                region : action.region
            }
        
            return [...state, newMember]
        }
        case 'DELETE' :{
            return state.filter((_, index) => index !== action.index); 
        }

    }
    
}

export default reducer;