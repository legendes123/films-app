import React from 'react'
import { Box, Button, FormControl, TextField, Typography } from '@mui/material'
import { AccountCircle } from '@mui/icons-material'
import LockOpenIcon from '@mui/icons-material/LockOpen'
import SendIcon from '@mui/icons-material/Send'
import { useSetIsAuthContext } from '../../context/Context'
import InputForm from '../inputForm/inputForm'
import TokenIcon from '@mui/icons-material/Token'

const Authorization = ({ titleAuthorization }) => {
	const handleChangeAuthStatus = useSetIsAuthContext()

	return (
		<Box
			sx={{
				width: 550,
				height: 500,
				backgroundColor: '#573b8a',
				borderRadius: '10px',
				overflow: 'hidden',
				boxShadow: '5px 20px 50px #000',
				position: 'absolute',
				zIndex: 1000,
				left: ' 35%',
				top: '25%'
			}}
		>
			<Box
				sx={{ height: '460px', background: '#eee', borderRadius: '60% / 10%' }}
			>
				<FormControl sx={{ display: 'flex', justifyContent: 'spaceBetween' }}>
					<Typography
						sx={{
							color: '#573b8a',
							fontSize: '2.3em',
							marginTop: '60px',
							textAlign: 'center'
						}}
					>
						{titleAuthorization}
					</Typography>
					<InputForm label='Email' Icon={AccountCircle}></InputForm>
					<InputForm label='Password' Icon={LockOpenIcon}></InputForm>
					<InputForm label='Token' Icon={TokenIcon}></InputForm>
					<Button
						onClick={() => {
							handleChangeAuthStatus(true)
						}}
						variant='outlined'
						startIcon={<SendIcon />}
						sx={{
							width: 350,
							height: 40,
							display: 'flex',
							mr: 'auto',
							ml: 'auto'
						}}
					>
						Send
					</Button>
				</FormControl>
			</Box>
		</Box>
	)
}
export default Authorization
