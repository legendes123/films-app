import { getCookie } from '../utils/getCookie'
import {
	COOKIES,
	DEFAULT_SERVER_API,
	SERVER_API_PARAMS
} from '../defaultValue/defaultValue'

const token = getCookie(COOKIES.TOKEN)
const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization: 'Bearer ' + token
	}
}

export async function requestsGetSearchFilms(value, page = 1) {
	try {
		let response = await fetch(
			`${DEFAULT_SERVER_API}${SERVER_API_PARAMS.SEARCH}${value}&page=${page}`,
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
