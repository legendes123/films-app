import React, { createContext, useContext, useReducer } from 'react'
const SelectedFiltersContext = createContext(null)
const DispatchSelectedFiltersContext = createContext(null)

export function useSelectedFiltersContext() {
	return useContext(SelectedFiltersContext)
}

export function useDispatchSelectedFilters() {
	return useContext(DispatchSelectedFiltersContext)
}
const initialSelectedFilters = {
	selectSort: 'По полярности',
	selectYear: [1980, 2023],
	category: []
}
const FiltersContext = ({ children }) => {
	function filtiriesReducer(state, action) {
		switch (action.type) {
			case 'select_sort': {
				return {
					...state,
					selectSort: action.selectSort
				}
			}
			case 'select_year': {
				return {
					...state,
					selectYear: [action.selectYearStart, action.selectYearEnd]
				}
			}
			case 'select_category': {
				return {
					...state,
					category: [action.category]
				}
			}
			case 'filters_clear': {
				return {
					...state,
					selectSort: '',
					selectYear: [1980, 2023],
					category: []
				}
			}
			case 'unselected_category': {
				return {
					...state,
					category: state.category.filter(
						elem => elem !== action.unselectedCategory
					)
				}
			}

			default: {
				throw Error('Unknown action: ' + action.type)
			}
		}
	}
	const [selectedFilters, dispatchSelectedFilters] = useReducer(
		filtiriesReducer,
		initialSelectedFilters
	)
	return (
		<SelectedFiltersContext.Provider value={selectedFilters}>
			<DispatchSelectedFiltersContext.Provider value={dispatchSelectedFilters}>
				{children}
			</DispatchSelectedFiltersContext.Provider>
		</SelectedFiltersContext.Provider>
	)
}

export default FiltersContext
