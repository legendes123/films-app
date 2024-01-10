import React, { useEffect } from 'react'
import Header from '../../components/header/header'
import NavBar from '../navBar/navBar'
import { Box } from '@mui/material'
import Films from '../films/films'
import Modal from '../modal/modal'
import { requestsGetAccountId } from '../../requests/requestsGetAccountId'
import { useCookies } from 'react-cookie'
import { COOKIES } from '../../defaultValue/defaultValue'
import ErrorFetch from '../../error/errorFetch'
import { useSetError } from '../../context/errorsContext/errorsContext'
import { useIsRegContext } from '../../context/userContext/userContext'

const Content = () => {
	const isRegUser = useIsRegContext()
	const [cookies, setCookie] = useCookies(['token'])
	const setError = useSetError()

	useEffect(() => {
		async function saveAccountId() {
			const accountIdUser = await requestsGetAccountId()
			if (accountIdUser.isFetchError) setError(true)
			if (!accountIdUser.isFetchError)
				setCookie(COOKIES.ACCOUNT_ID, accountIdUser.id, { path: '/' })
		}

		saveAccountId()
	}, [])
	return (
		<>
			{isRegUser ? (
				<>
					<Header />
					<Box sx={{ display: 'flex' }}>
						<NavBar />
						<Films></Films>
						<ErrorFetch></ErrorFetch>
					</Box>
				</>
			) : (
				<>
					<Modal></Modal>
					<Header />
				</>
			)}
		</>
	)
}

export default Content
