import { getCookie } from '../utils/getCookie'
import { COOKIES, DEFAULT_SERVER_API } from '../defaultValue/defaultValue'

let token = getCookie(COOKIES.TOKEN)
let options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization: 'Bearer ' + token
	}
}
export async function requestsGetDetailsFilms(filmId = 123) {
	try {
		let response = await fetch(
			`${DEFAULT_SERVER_API}3/movie/${filmId}?language=ru`,
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
