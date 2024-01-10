import React, { useCallback, useEffect, useMemo, useState } from 'react'
import Header from '../../components/header/header'
import { Box, CardMedia, Grid, Typography } from '@mui/material'
import CardContent from '@mui/material/CardContent'
import Card from '@mui/material/Card'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { Link, useLoaderData } from 'react-router-dom'
import { requestsGetDetailsFilms } from '../../requests/requestsGetDetailsFilms'
import { requestsGetFavoriteFilms } from '../../requests/requestsGetFavoriteFilms'
import { requestsPostFavoriteFilmsAdd } from '../../requests/requestsPostFavoriteFilmsAdd'
import { requestsPostFavoriteFilmsDelete } from '../../requests/requestsPostFavoriteFilmsDelete'
import ErrorFetch from '../../error/errorFetch'
import {
	DEFAULT_TYPES_SORT_IMG_URL,
	DETAILS_TITLE
} from '../../defaultValue/defaultValue'
import ListDetails from '../../components/listDetails/listDetails'
import IconFavorites from '../../components/ iconFavorites/ iconFavorites'
import { useSetError } from '../../context/errorsContext/errorsContext'

export async function loader({ params }) {
	const filmsId = params.filmId.substring(1)
	const film = await requestsGetDetailsFilms(filmsId)
	return film
}

const DetailsFilms = () => {
	const film = useLoaderData()
	const setError = useSetError()

	const detailsValue = useMemo(
		() => [
			film.production_countries[0].iso_3166_1,
			film.release_date,
			film.genres[0].name + ' ' + film.genres[1].name,
			film.budget,
			`${128} минут`,
			film.vote_average
		],
		[film]
	)

	const [isFavoriteFilms, setIsFavoriteFilms] = useState(false)
	useEffect(() => {
		async function getFavoriteFilms() {
			const fetchFavoriteFilms = await requestsGetFavoriteFilms()
			if (fetchFavoriteFilms.isFetchError) setError(true)
			if (!fetchFavoriteFilms.isFetchError) {
				fetchFavoriteFilms.results.some(movie => movie.id === film.id)
				setIsFavoriteFilms(true)
			}
		}
		getFavoriteFilms()
	}, [])

	async function handleChangeFavoriteStatus(movieStatus) {
		setIsFavoriteFilms(movieStatus)
		if (isFavoriteFilms) {
			const filmsDelete = await requestsPostFavoriteFilmsDelete(film.id)
			if (filmsDelete.isFetchError) {
				setError(true)
				setIsFavoriteFilms(false)
			}
		}
		if (!isFavoriteFilms) {
			const filmsAdd = await requestsPostFavoriteFilmsAdd(film.id)
			if (filmsAdd.isFetchError) {
				setError(true)
				setIsFavoriteFilms(false)
			}
		}
	}

	return (
		<>
			<ErrorFetch></ErrorFetch>
			<Box>
				<Header titleFilms={film.title}></Header>
				<Card
					sx={{
						display: 'flex',
						maxWidth: 1200,
						padding: '30px',
						justifyContent: 'centre'
					}}
				>
					<CardMedia
						component='img'
						sx={{ width: 500 }}
						image={`${DEFAULT_TYPES_SORT_IMG_URL}${film.poster_path}`}
						alt='Live from space album cover'
					/>
					<Box
						sx={{ display: 'flex', flexDirection: 'column', padding: '20px' }}
					>
						<CardContent>
							<Box sx={{ display: 'flex' }}>
								<Typography variant='h3'>{film.title}</Typography>
								<IconFavorites
									isFavoriteFilms={isFavoriteFilms}
									handleChangeFavoriteStatus={handleChangeFavoriteStatus}
								></IconFavorites>
							</Box>
							<Link to={'/'} style={{ color: 'black' }}>
								<ArrowBackIcon></ArrowBackIcon>
							</Link>
						</CardContent>

						<CardContent>
							<Typography variant='h6'>{film.overview}</Typography>
						</CardContent>

						<CardContent sx={{ flex: '1 0 auto' }}>
							<Typography variant='h3'>Детали</Typography>
							<Grid container spacing={2}>
								<ListDetails listElem={DETAILS_TITLE}></ListDetails>
								<ListDetails listElem={detailsValue}></ListDetails>
							</Grid>
						</CardContent>
					</Box>
				</Card>
			</Box>
		</>
	)
}

export default DetailsFilms
