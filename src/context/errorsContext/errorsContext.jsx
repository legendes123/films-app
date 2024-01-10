import React, { createContext, useContext, useState } from 'react'
const ErrorsContext = createContext(null)
const SetErrorContext = createContext(null)
export function useError() {
	return useContext(ErrorsContext)
}

export function useSetError() {
	return useContext(SetErrorContext)
}
const ErrorContext = ({ children }) => {
	const [error, setError] = useState(false)

	return (
		<ErrorsContext.Provider value={error}>
			<SetErrorContext.Provider value={setError}>
				{children}
			</SetErrorContext.Provider>
		</ErrorsContext.Provider>
	)
}

export default ErrorContext
