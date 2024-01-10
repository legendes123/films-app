import './App.css'
import Content from './pages/content/content.jsx'
import React from 'react'
import DetailsFilms, { loader } from './pages/detailsFilms/detailsFilms'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './error/errorPage'
import UserContext from './context/userContext/userContext'
import ErrorContext from './context/errorsContext/errorsContext'
import PaginationContext from './context/paginationContext/paginationContext'
import FiltersContext from './context/filtersContext/filtersContext'
import FilmsRenderContext from './context/filmsRenderContext/filmsRenderContext'

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Content />,
			errorElement: <ErrorPage />
		},
		{
			path: 'detailsFilms/:filmId',
			element: <DetailsFilms />,
			loader: loader
		}
	])

	return (
		<FilmsRenderContext>
			<FiltersContext>
				<PaginationContext>
					<ErrorContext>
						<UserContext>
							<RouterProvider router={router}></RouterProvider>
						</UserContext>
					</ErrorContext>
				</PaginationContext>
			</FiltersContext>
		</FilmsRenderContext>
	)
}

export default App
