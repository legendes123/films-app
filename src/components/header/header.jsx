import React from 'react'
import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { Link } from 'react-router-dom'
import { useSetIsRegContext } from '../../context/userContext/userContext'
const Header = ({ titleFilms }) => {
	let changeStatusReg = useSetIsRegContext()

	return (
		<Box sx={{ width: '100vw', height: '10vh' }}>
			<AppBar position='static'>
				<Toolbar>
					<Typography variant='h6' component='h6' sx={{ flexGrow: 1 }}>
						<Link to={'/'} style={{ color: 'white', textDecoration: 'none' }}>
							Фильмы {titleFilms}
						</Link>
					</Typography>
					<AccountCircleIcon
						onClick={() => {
							changeStatusReg(false)
						}}
						fontSize='large'
					></AccountCircleIcon>
				</Toolbar>
			</AppBar>
		</Box>
	)
}

export default Header
