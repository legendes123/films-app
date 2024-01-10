import { getCookie } from '../utils/getCookie'
import { COOKIES, DEFAULT_SERVER_API } from '../defaultValue/defaultValue'

let token = getCookie(COOKIES.TOKEN)
let accountId = getCookie(COOKIES.ACCOUNT_ID)

export async function requestsPostFavoriteFilmsAdd(movieId) {
	try {
		let response = await fetch(
			`${DEFAULT_SERVER_API}3/account/${accountId}/favorite`,
			{
				method: 'POST',
				headers: {
					accept: 'application/json',
					'content-type': 'application/json',
					Authorization: 'Bearer ' + token
				},
				body: JSON.stringify({
					media_type: 'movie',
					media_id: movieId,
					favorite: true
				})
			}
		)
		let data = await response.json()
		return data
	} catch (error) {
		return {
			isFetchError: true,
			message: 'Проблема с соединением'
		}
	}
}
