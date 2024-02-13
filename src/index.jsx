import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import AppWithSearchParams from './AppWithSearchParams'
import { BrowserRouter } from 'react-router-dom'
import OtpTest from './OtpTest'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			{/* <App/> */}
			{/* <AppWithSearchParams/> */}
			<OtpTest />
		</BrowserRouter>
	</React.StrictMode>
)