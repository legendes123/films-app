import React from 'react'
import { TextField } from '@mui/material'
import { Autocomplete } from '@mui/lab'

const ComboBox = ({
	multiple,
	options,
	disableCloseOnSelect,
	dispatchFiltries
}) => {
	return (
		<Autocomplete
			multiple={multiple}
			options={options}
			disableCloseOnSelect={disableCloseOnSelect}
			renderInput={params => <TextField {...params} label='Movie' />}
			onChange={(event, newValue) => {
				dispatchFiltries(event, newValue)
			}}
		/>
	)
}

export default ComboBox
