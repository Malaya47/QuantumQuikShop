import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import App from './App'
import ProductsListing from './pages/ProductsListing'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';  

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />
	},
	{
		path: '/products/:category',
		element: <ProductsListing />
	}
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)