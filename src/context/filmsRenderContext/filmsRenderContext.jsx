import React, { createContext, useContext, useState } from 'react'
import { defaultValueFilmsRender } from '../../defaultValue/defaultValue'
const FilmsContext = createContext(null)
const FilmsSetContext = createContext(null)
export function useFilmsRenderContext() {
	return useContext(FilmsContext)
}

export function useSetFilmsRender() {
	return useContext(FilmsSetContext)
}
const FilmsRenderContext = ({ children }) => {
	const [filmsRender, setFilmsRender] = useState(defaultValueFilmsRender)

	return (
		<FilmsContext.Provider value={filmsRender}>
			<FilmsSetContext.Provider value={setFilmsRender}>
				{children}
			</FilmsSetContext.Provider>
		</FilmsContext.Provider>
	)
}

export default FilmsRenderContext
