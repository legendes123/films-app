export const defaultState = {
	objectState: {},
	arrayState: [],
	stringState: '',
	numberState: 0
}
export const DEFAULT_TYPES_DISPATCH = {
	CLEAR: 'filters_clear',
	SORT: 'select_sort',
	YEAR: 'select_year',
	CATEGORY: 'select_category'
}
export const DEFAULT_TYPES_SORT = {
	POPULARITY: 'По полярности',
	RATING: 'По рейтигу'
}
export const DETAILS_TITLE = [
	'Страна',
	'Год',
	'Жанр',
	'Бюджет',
	'Время',
	'Рейтинг'
]
export const COOKIES = {
	TOKEN: 'token',
	ACCOUNT_ID: 'account_id'
}
export const DEFAULT_TYPES_SORT_IMG_URL = 'https://image.tmdb.org/t/p/w500'
export const DEFAULT_SERVER_API = 'https://api.themoviedb.org/'
export const SERVER_API_PARAMS = {
	SEARCH_BY_NAME: '3/search/movie?include_adult=true&language=ru&page=',
	GENRES: '3/genre/movie/list?language=ru',
	TOP_RATED_LIST: '3/movie/top_rated?language=ru&page=',
	POPULAR_LIST: '3/movie/popular?language=ru&page=',
	ACCOUNT_ID: '3/account/account_id',
	SEARCH: '3/search/movie?query='
}
export const defaultValueFilmsRender = { results: [] }
