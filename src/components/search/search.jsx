import React, { useEffect } from 'react'
import { Box, TextField } from '@mui/material'
import { requestsGetPopularFilms } from '../../requests/requestsGetPopularFilms'
import { requestsGetSearchFilms } from '../../requests/requestsGetSearchFilms'
import { useSetError } from '../../context/errorsContext/errorsContext'
import { usePage } from '../../context/paginationContext/paginationContext'
import { useSetFilmsRender } from '../../context/filmsRenderContext/filmsRenderContext'

const Search = () => {
	const handleChangeFilmsRender = useSetFilmsRender()
	const currentPage = usePage()
	const setError = useSetError()

	async function renderFilmsSearch(valueSearch) {
		const responseFilmsSearch = await requestsGetSearchFilms(
			valueSearch,
			currentPage
		)
		if (responseFilmsSearch.isFetchError) setError(true)
		if (!responseFilmsSearch.isFetchError)
			handleChangeFilmsRender(responseFilmsSearch)
	}
	async function renderFilmsSearchEmpty() {
		const responseFilmsPopular = await requestsGetPopularFilms()
		if (responseFilmsPopular.isFetchError) setError(true)
		if (!responseFilmsPopular.isFetchError)
			handleChangeFilmsRender(responseFilmsPopular)
	}
	return (
		<Box
			component='form'
			sx={{
				'& > :not(style)': { m: 1, width: '25ch' }
			}}
			noValidate
			autoComplete='off'
		>
			<TextField
				id='filled-basic'
				label='Поиск'
				variant='filled'
				onChange={e => {
					if (e.target.value === '') {
						renderFilmsSearchEmpty()
					} else {
						renderFilmsSearch(e.target.value)
					}
				}}
			/>
		</Box>
	)
}

export default Search
