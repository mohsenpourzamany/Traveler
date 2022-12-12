import { combineReducers } from 'redux';
import packageReducer from './packageReducer';

export default combineReducers  ({
    packageState : packageReducer,
})