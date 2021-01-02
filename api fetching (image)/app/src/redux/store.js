import redux from 'redux';
import {createStore} from 'redux';
import Reducer from './card/reducers';



const store = createStore(Reducer);


export default store; 

