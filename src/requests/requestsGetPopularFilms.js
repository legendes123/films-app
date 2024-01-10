import { getCookie } from '../utils/getCookie'
import {
	COOKIES,
	DEFAULT_SERVER_API,
	SERVER_API_PARAMS
} from '../defaultValue/defaultValue'

let token = getCookie(COOKIES.TOKEN)
let options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization: 'Bearer ' + token
	}
}

export async function requestsGetPopularFilms(numberPages = 1) {
	try {
		let response = await fetch(
			`${DEFAULT_SERVER_API}${SERVER_API_PARAMS.POPULAR_LIST}${numberPages}`,
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
