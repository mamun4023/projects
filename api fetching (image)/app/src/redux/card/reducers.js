import {BUY} from './types';
const initialState = {
	BuyProducts : 0
}

const reducer = (state = initialState, action)=> {
	switch(action.type){
		case BUY:
			return{
				...state,
				BuyProducts  : state.BuyProducts + 1
			}

		default:
			return state
	}
}



export default reducer;