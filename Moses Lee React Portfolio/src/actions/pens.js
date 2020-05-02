import { getAllPens, getPopularPens } from '../services/codepen';

export const actionNames = {
	GET_ALL_PENS_STARTED: 'GET_ALL_PENS_STARTED',
	GET_ALL_PENS_FAILED: 'GET_ALL_PENS_FAILED',
	GET_ALL_PENS_SUCCESS: 'GET_ALL_PENS_SUCCESS'
}

export function fetchAllPens(page = 1) {
	return async dispatch => {
		
		dispatch({type: actionNames.GET_ALL_PENS_STARTED});
		
		try {
			const response = await getAllPens(page);
			
			if (!response.error) {
				return dispatch({
					type: actionNames.GET_ALL_PENS_SUCCESS,
					payload: response.data
				});
			} else {
				return dispatch({
					type: actionNames.GET_ALL_PENS_FAILED
				});
			}
		} catch(err) {
			console.error(`There was an error fetching the pens: ${err}`);
			return dispatch({
				type: actionNames.GET_ALL_PENS_FAILED,
				payload: err
			});
		}
	}
}
