import React, { createContext, useContext, useState } from 'react'
const CurrentPageContext = createContext(null)
const SetCurrentPageContext = createContext(null)
export function usePage() {
	return useContext(CurrentPageContext)
}

export function useSetPage() {
	return useContext(SetCurrentPageContext)
}
const PaginationContext = ({ children }) => {
	const [currentPage, setCurrentPage] = useState(1)

	return (
		<CurrentPageContext.Provider value={currentPage}>
			<SetCurrentPageContext.Provider value={setCurrentPage}>
				{children}
			</SetCurrentPageContext.Provider>
		</CurrentPageContext.Provider>
	)
}

export default PaginationContext
