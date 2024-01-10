import { getCookie } from '../utils/getCookie'
import { COOKIES, DEFAULT_SERVER_API } from '../defaultValue/defaultValue'

let token = getCookie(COOKIES.TOKEN)
let accountId = getCookie('account_id')

let options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization: 'Bearer ' + token
	}
}

export async function requestsGetFavoriteFilms() {
	try {
		let response = await fetch(
			`${DEFAULT_SERVER_API}3/account/${accountId}/favorite/movies`,
			options
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
