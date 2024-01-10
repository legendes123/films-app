import React, { memo } from 'react'
import {
	Grid,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText
} from '@mui/material'

const ListDetails = memo(function ListDetails({ listElem }) {
	return (
		<Grid item xs={12} md={6}>
			<div>
				<List>
					{listElem.map(elem => {
						return (
							<ListItem key={elem}>
								<ListItemAvatar></ListItemAvatar>
								<ListItemText primary={elem} />
							</ListItem>
						)
					})}
				</List>
			</div>
		</Grid>
	)
})

export default ListDetails
