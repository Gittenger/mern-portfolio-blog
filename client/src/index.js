import React from 'react'
import ReactDOM from 'react-dom'

import App from './App.jsx'
import GlobalStyles from './styles/global.styles.jsx'
import PageProvider from './contexts/PageProvider.jsx'

import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'

// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<PageProvider>
				<App />
			</PageProvider>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
