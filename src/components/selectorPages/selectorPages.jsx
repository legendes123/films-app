import React from 'react'
import { Paper } from '@mui/material'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import { requestsGetPopularFilms } from '../../requests/requestsGetPopularFilms'
import { requestsGetTopRaitingFilms } from '../../requests/requestsGetTopRatingFilms'

import { DEFAULT_TYPES_SORT } from '../../defaultValue/defaultValue'
import { useSetPage } from '../../context/paginationContext/paginationContext'
import { useSetFilmsRender } from '../../context/filmsRenderContext/filmsRenderContext'
import { useSelectedFiltersContext } from '../../context/filtersContext/filtersContext'
import { useSetError } from '../../context/errorsContext/errorsContext'

const SelectorPages = () => {
	const handleSetCurrentPage = useSetPage()
	const selectedFilters = useSelectedFiltersContext()
	const handleChangeFilms = useSetFilmsRender()
	const setError = useSetError()

	async function handleChangePage(event, page) {
		handleSetCurrentPage(page)
		switch (selectedFilters.selectSort) {
			case DEFAULT_TYPES_SORT.POPULARITY: {
				const fetchPopularFilms = await requestsGetPopularFilms(page)
				if (fetchPopularFilms.isFetchError) setError(true)
				if (!fetchPopularFilms.isFetchError)
					handleChangeFilms(fetchPopularFilms)
				break
			}
			case DEFAULT_TYPES_SORT.RATING: {
				const fetchTopRaitingFilms = await requestsGetTopRaitingFilms(page)
				if (fetchTopRaitingFilms.isFetchError) setError(true)
				if (!fetchTopRaitingFilms.isFetchError)
					handleChangeFilms(fetchTopRaitingFilms)
				break
			}
		}
	}

	return (
		<>
			<Paper sx={{ position: 'absolute', bottom: '0px' }}>
				<Stack spacing={2}>
					<Pagination
						count={500}
						color='primary'
						onChange={(event, page) => {
							handleChangePage(event, page)
						}}
					/>
				</Stack>
			</Paper>
		</>
	)
}

export default SelectorPages
