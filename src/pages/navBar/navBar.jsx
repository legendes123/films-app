import React from 'react'
import Filtries from '../filtries/filtries'
import { Box } from '@mui/material'
import SelectorPages from '../../components/selectorPages/selectorPages'

const NavBar = () => {
	return (
		<Box
			sx={{
				width: '30vh',
				height: '80vh',
				margin: '20px',
				position: 'relative'
			}}
		>
			<Filtries />
			<SelectorPages></SelectorPages>
		</Box>
	)
}

export default NavBar
