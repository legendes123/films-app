import React from 'react'
import StarRateIcon from '@mui/icons-material/StarRate'
import StarBorderIcon from '@mui/icons-material/StarBorder'

const IconFavorites = ({ isFavoriteFilms, handleChangeFavoriteStatus }) => {
	return (
		<>
			{isFavoriteFilms ? (
				<StarRateIcon
					onClick={() => {
						handleChangeFavoriteStatus(false)
					}}
					sx={{
						color: '#FFA500',
						width: '50px',
						height: '50px'
					}}
					size='large'
				></StarRateIcon>
			) : (
				<StarBorderIcon
					onClick={() => {
						handleChangeFavoriteStatus(true)
					}}
					sx={{
						color: '#FFA500',
						width: '50px',
						height: '50px'
					}}
					size='large'
				></StarBorderIcon>
			)}
		</>
	)
}

export default IconFavorites
