import { combineReducers, configureStore } from '@reduxjs/toolkit'
import counterSlice from '../features/counter/counterSlice';
import dessertSlice from '../features/dessertRedux/dessertSlice';
import bankSlice from '../features/bankRedux/bankSlice';
import memberSlice from '../features/memberRedux/memberSlice';

const rootReducer = combineReducers({
counter: counterSlice,
dessert : dessertSlice,
bank : bankSlice,
member : memberSlice
});
const store = configureStore({
reducer: rootReducer,
});
export default store;
