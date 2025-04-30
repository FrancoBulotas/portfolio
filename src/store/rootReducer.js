
import { combineReducers } from '@reduxjs/toolkit';
import languageReducer from './languageReducer'


export const rootReducer = combineReducers({
    language: languageReducer,
});

export default rootReducer;