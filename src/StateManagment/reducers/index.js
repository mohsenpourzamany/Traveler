import {combineReducers} from 'redux';
import PackageReducer from './PackageReducer';

export default combineReducers ({
    packageState:PackageReducer,
})