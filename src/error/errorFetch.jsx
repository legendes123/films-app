import React from 'react'
import { Backdrop, Box } from '@mui/material'
import { Alert } from '@mui/lab'
import ClearIcon from '@mui/icons-material/Clear'
import { useError, useSetError } from '../context/errorsContext/errorsContext'
const ErrorFetch = () => {
	const error = useError()
	const setError = useSetError()

	return (
		<>
			{error && (
				<Backdrop open='open'>
					<Box
						sx={{
							position: 'absolute',
							width: '400px',
							height: '200px',
							top: '40%',
							left: '40%',
							backgroundColor: '#9799a1'
						}}
					>
						<ClearIcon
							onClick={() => {
								setError(prev => !prev)
							}}
							color='black'
						></ClearIcon>
						<h1>Oops!</h1>
						<p>Sorry, an unexpected error has occurred.</p>
						<Alert variant='outlined' severity='error'>
							This is an error alert — check it out!
						</Alert>
					</Box>
				</Backdrop>
			)}
		</>
	)
}

export default ErrorFetch
