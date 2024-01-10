import React, { createContext, useContext, useState } from 'react'

const UserTokenContext = createContext(null)
const UserSetTokenContext = createContext(null)
const IsRegContext = createContext(null)
const SetIsRegContext = createContext(null)
const IsAuthContext = createContext(null)
const SetIsAuthContext = createContext(null)

export function useUserToken() {
	return useContext(UserTokenContext)
}

export function useSetUserToken() {
	return useContext(UserSetTokenContext)
}

export function useIsAuthContext() {
	return useContext(IsAuthContext)
}

export function useSetIsAuthContext() {
	return useContext(SetIsAuthContext)
}
export function useIsRegContext() {
	return useContext(IsRegContext)
}

export function useSetIsRegContext() {
	return useContext(SetIsRegContext)
}
const UserContext = ({ children }) => {
	const [isReg, setIsReg] = useState(true)
	const [isAuth, setIsAuth] = useState(false)
	const [userToken, setUserToken] = useState('')
	return (
		<UserSetTokenContext.Provider value={setUserToken}>
			<UserTokenContext.Provider value={userToken}>
				<IsAuthContext.Provider value={isAuth}>
					<SetIsAuthContext.Provider value={setIsAuth}>
						<SetIsRegContext.Provider value={setIsReg}>
							<IsRegContext.Provider value={isReg}>
								<SetIsRegContext.Provider value={setIsReg}>
									{children}
								</SetIsRegContext.Provider>
							</IsRegContext.Provider>
						</SetIsRegContext.Provider>
					</SetIsAuthContext.Provider>
				</IsAuthContext.Provider>
			</UserTokenContext.Provider>
		</UserSetTokenContext.Provider>
	)
}

export default UserContext
