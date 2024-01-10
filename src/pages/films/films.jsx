import React, { useEffect } from 'react'
import { Grid } from '@mui/material'
import CardFilms from '../../components/cardFilms/cardFilms'
import { requestsGetPopularFilms } from '../../requests/requestsGetPopularFilms'

import { DEFAULT_TYPES_SORT_IMG_URL } from '../../defaultValue/defaultValue'
import { useSetError } from '../../context/errorsContext/errorsContext'
import {
	useFilmsRenderContext,
	useSetFilmsRender
} from '../../context/filmsRenderContext/filmsRenderContext'

const Films = () => {
	const handleChangeFilms = useSetFilmsRender()
	const films = useFilmsRenderContext()
	const setError = useSetError()

	useEffect(() => {
		async function getFilms() {
			const fetchPopularFilms = await requestsGetPopularFilms()
			if (fetchPopularFilms.isFetchError) setError(true)
			if (!fetchPopularFilms.isFetchError) handleChangeFilms(fetchPopularFilms)
		}
		getFilms()
	}, [])
	console.log(films.results)

	return (
		<Grid container spacing={12} sx={{ margin: '0 auto' }}>
			{films.results.map(elem => {
				return (
					<CardFilms
						key={elem.id}
						idFilms={elem.id}
						titleFilm={elem.title}
						posterFilm={`${DEFAULT_TYPES_SORT_IMG_URL}${elem.backdrop_path}`}
						ratingFilm={elem.vote_average}
					></CardFilms>
				)
			})}
		</Grid>
	)
}

export default Films
