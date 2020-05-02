import config from '../../env';

export async function getPopularPens(limit = null) {
	try {
		const resp = await(fetch(`${config.codepenApiUrl}/pens/popular/${config.userName}`));
		
		if (resp.ok) {
			if (limit != null) {
				
				const results = await resp.json();
				
				return {
					data: results.data.slice(0, limit)
				}
			} else {
				return await resp.json();
			}
		}
	} catch(err) {
		throw new Error(`There was an error fetching popular pens: ${err}`);
	}
		
}


export async function getAllPens(page = 1) {
	try {
		const resp = await(fetch(`${config.codepenApiUrl}/pens/public/${config.userName}?page=${page}`));
		if (resp.ok) {
			return await resp.json();
		}
	} catch(err) {
		throw new Error(`There was an error fetching popular pens: ${err}`);
	}
		
}