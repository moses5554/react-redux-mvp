import { getAllPens } from '../services/codepen';
import { actionNames } from '../actions/pens';

const initialState = {
	loading: false,
	complete: true,
	pens: []
}


export default function pens(state = initialState, action) {
	let newState;
	
	switch(action.type) {
		case actionNames.GET_ALL_PENS_STARTED:
			console.log('fetch pens started', action);
			
			return {
				...state,
				loading: true,
				complete: false
			};
		
		case actionNames.GET_ALL_PENS_SUCCESS:
			// console.log('fetch pens success', action);
			newState = { ...state };
			
			for (const pen of action.payload) {
				newState.pens[pen.id] = pen;
				newState.loading = false;
				newState.completed = true;
			}
			
			return newState;
			
		case actionNames.GET_ALL_PENS_FAILED:
			// console.log('fetch pens failed', action);
			return {
				...state,
				loading: false,
				complete: true
			};
		
		default:
			return state;
	}
}