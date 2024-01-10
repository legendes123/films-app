import React, { useEffect, useState } from 'react'
import { Box, CardMedia, Grid, Typography } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import StarRateIcon from '@mui/icons-material/StarRate'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import { Link } from 'react-router-dom'
import { requestsGetFavoriteFilms } from '../../requests/requestsGetFavoriteFilms'
import { defaultState } from '../../defaultValue/defaultValue'
import { useSetError } from '../../context/errorsContext/errorsContext'

const CardFilms = ({ titleFilm, posterFilm, ratingFilm, idFilms }) => {
	const [favoriteFilms, setFavoriteFilms] = useState(defaultState.arrayState)
	const setError = useSetError()

	useEffect(() => {
		async function getFavoriteFilms() {
			const fetchFavoriteFilms = await requestsGetFavoriteFilms()
			if (fetchFavoriteFilms.isFetchError) setError(true)
			if (!fetchFavoriteFilms.isFetchError)
				setFavoriteFilms(fetchFavoriteFilms.results)
		}
		getFavoriteFilms()
	}, [])
	const isFavoriteFilms =
		favoriteFilms.filter(el => el.id === idFilms).length === 0 ? true : false
	return (
		<Grid sx={{ height: '500px' }} item xs={3} md={4}>
			<Card>
				<Link to={`/detailsFilms/:${idFilms}`} style={{ color: 'black' }}>
					<CardMedia
						component='img'
						image={posterFilm}
						alt='CardMedia Image Example'
						height='300'
						title='CardMedia Image Example'
					/>
				</Link>
				<CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
					<Box>
						<Typography variant='h5'>{titleFilm}</Typography>
						<Typography variant='body2' color='text.secondary'>
							{ratingFilm}
						</Typography>
					</Box>
					<Box>
						{isFavoriteFilms ? (
							<StarBorderIcon></StarBorderIcon>
						) : (
							<StarRateIcon></StarRateIcon>
						)}
					</Box>
				</CardContent>
			</Card>
		</Grid>
	)
}

export default CardFilms
