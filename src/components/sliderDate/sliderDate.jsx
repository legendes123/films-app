import React from 'react'
import Slider from '@mui/material-next/Slider'

const SliderDate = ({ dispatchChangeYears, selectedDate }) => {
	return (
		<Slider
			sx={{ mt: '20px', width: '268px', ml: '16px', fontSize: '10px' }}
			size='large'
			value={selectedDate}
			aria-label='Default'
			onChange={(event, newValue) => {
				dispatchChangeYears(event, newValue)
			}}
			valueLabelDisplay='auto'
			min={1980}
			max={2023}
		/>
	)
}

export default SliderDate
