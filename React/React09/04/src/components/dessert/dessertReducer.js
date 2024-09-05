/* eslint-disable default-case */
const reducer = (state, action) => {
    //state : 상태값
    //action : 어떻게 바꿀 것인지

    switch(action.type) {
        case '빙수' :
        case '당고' :
        case '케이크' :
        case '푸딩' :
            // return state + action.price; //state = total
            return [...state, {name: action.type, price : action.price}]
    }
}

export default reducer;