import React from 'react'
import { Box, TextField } from '@mui/material'

const InputForm = ({ Icon, changeData, label }) => {
	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'flex-end',
				justifyContent: 'center',
				my: 1,
				mt: 3.5
			}}
		>
			<Icon fontSize='large' sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
			<TextField
				onChange={e => {
					changeData(e.target.value)
				}}
				id='input-with-sx'
				label={label}
				variant='standard'
				sx={{ width: 280 }}
			/>
		</Box>
	)
}

export default InputForm
