import React, { memo, useCallback, useEffect, useState } from 'react'
import { requestsGetCategoryFilms } from '../../requests/requestsGetCategoryFilms'

import { Box, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { requestsGetPopularFilms } from '../../requests/requestsGetPopularFilms'
import { requestsGetTopRaitingFilms } from '../../requests/requestsGetTopRatingFilms'
import { selectTypeSort } from '../../data'
import Search from '../../components/search/search'
import ComboBox from '../../components/comboBox/comboBox'
import SliderDate from '../../components/sliderDate/sliderDate'
import {
	DEFAULT_TYPES_DISPATCH,
	DEFAULT_TYPES_SORT,
	defaultState
} from '../../defaultValue/defaultValue'
import { useSetError } from '../../context/errorsContext/errorsContext'
import {
	useDispatchSelectedFilters,
	useSelectedFiltersContext
} from '../../context/filtersContext/filtersContext'
import { useSetFilmsRender } from '../../context/filmsRenderContext/filmsRenderContext'

const Filtries = memo(function Filtries() {
	const [movieType, setMovieType] = useState(defaultState.arrayState)
	const dispatchSelectedFilters = useDispatchSelectedFilters()
	const filmsRender = useSelectedFiltersContext()
	const handleChangeFilmsRender = useSetFilmsRender()
	const filmsTypeSort = filmsRender.selectSort
	const setError = useSetError()

	useEffect(() => {
		switch (filmsTypeSort) {
			case DEFAULT_TYPES_SORT.POPULARITY: {
				const fetchPopularFilms = requestsGetPopularFilms()
				if (fetchPopularFilms.isFetchError) setError(true)
				if (!fetchPopularFilms.isFetchError)
					fetchPopularFilms.then(res => handleChangeFilmsRender(res))
				break
			}
			case DEFAULT_TYPES_SORT.RATING: {
				const fetchTopRaitingFilms = requestsGetTopRaitingFilms()
				if (fetchTopRaitingFilms.isFetchError) setError(true)
				if (!fetchTopRaitingFilms.isFetchError)
					fetchTopRaitingFilms.then(res => handleChangeFilmsRender(res))
				break
			}
		}
	}, [filmsRender.selectSort])
	useEffect(() => {
		async function getCategoryFilms() {
			const fetchedList = await requestsGetCategoryFilms().then(res => res)
			if (fetchedList.isFetchError) setError(true)
			if (!fetchedList.isFetchError)
				setMovieType(
					fetchedList.map(elem => {
						if (!elem.name) return elem.name
						if (elem.name) {
							return {
								id: elem.id,
								label: elem.name
							}
						}
					})
				)
		}
		getCategoryFilms()
	}, [])
	const handleChangeFiltriesCategory = useCallback(
		(event, newValue) => {
			dispatchSelectedFilters({
				type: DEFAULT_TYPES_DISPATCH.CATEGORY,
				category: newValue.map(elem => {
					return elem.label
				})
			})
		},
		[dispatchSelectedFilters]
	)
	const handleClearFiltries = useCallback(
		(event, newValue) => {
			dispatchSelectedFilters({
				type: DEFAULT_TYPES_DISPATCH.CLEAR
			})
		},
		[dispatchSelectedFilters]
	)
	const handleChangeFiltriesYears = useCallback(
		(event, newValue) => {
			dispatchSelectedFilters({
				type: DEFAULT_TYPES_DISPATCH.YEAR,
				selectYearStart: newValue[0],
				selectYearEnd: newValue[1]
			})
		},
		[dispatchSelectedFilters]
	)

	const handleChangeFiltriesTypeSort = useCallback(
		(event, newValue) => {
			dispatchSelectedFilters({
				type: DEFAULT_TYPES_DISPATCH.SORT,
				selectSort: newValue.label
			})
		},
		[dispatchSelectedFilters]
	)

	// function handleChangeFiltriesCategory(event, newValue) {
	// 	dispatchSelectedFilters({
	// 		type: DEFAULT_TYPES_DISPATCH.CATEGORY,
	// 		category: newValue.map(elem => {
	// 			return elem.label
	// 		})
	// 	})
	// }

	// function handleClearFiltries() {
	// 	dispatchSelectedFilters({
	// 		type: DEFAULT_TYPES_DISPATCH.CLEAR
	// 	})
	// }
	// function handleChangeFiltriesYears(event, newValue) {
	// 	dispatchSelectedFilters({
	// 		type: DEFAULT_TYPES_DISPATCH.YEAR,
	// 		selectYearStart: newValue[0],
	// 		selectYearEnd: newValue[1]
	// 	})
	// }
	// function handleChangeFiltriesTypeSort(event, newValue) {
	// 	dispatchSelectedFilters({
	// 		type: DEFAULT_TYPES_DISPATCH.SORT,
	// 		selectSort: newValue.label
	// 	})
	// }

	return (
		<Box sx={{ padding: '10px' }}>
			<Box sx={{ display: 'flex' }}>
				<Typography variant='h6' component='h6'>
					Фильтры
				</Typography>
				<CloseIcon
					onClick={handleClearFiltries}
					sx={{ flexGrow: 1 }}
				></CloseIcon>
			</Box>
			<Search></Search>
			<Box>
				<Typography
					variant='h6'
					component='h6'
					sx={{ textAlign: 'left', mt: '15px' }}
				>
					Сортировать по:
				</Typography>
				<ComboBox
					multiple={false}
					options={selectTypeSort}
					disableCloseOnSelect={false}
					dispatchFiltries={(event, newValue) => {
						handleChangeFiltriesTypeSort(event, newValue)
					}}
				></ComboBox>
			</Box>
			<Box sx={{ display: 'flex' }}>
				<Typography
					variant='h6'
					component='h6'
					sx={{ textAlign: 'left', mt: '15px' }}
				>
					Год релиза:
				</Typography>
				<SliderDate
					selectedDate={filmsRender.selectYear}
					dispatchChangeYears={(event, newValue) => {
						handleChangeFiltriesYears(event, newValue)
					}}
				></SliderDate>
			</Box>
			<Box>
				<Typography
					variant='h6'
					component='h6'
					sx={{ textAlign: 'left', mt: '15px' }}
				>
					Жанры
				</Typography>
				<ComboBox
					multiple={true}
					options={movieType}
					disableCloseOnSelect={true}
					dispatchFiltries={(event, newValue) => {
						handleChangeFiltriesCategory(event, newValue)
					}}
				></ComboBox>
			</Box>
		</Box>
	)
})

export default Filtries
