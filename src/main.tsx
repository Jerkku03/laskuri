import ReactDOM from 'react-dom/client'

import App from './App'

import "./App.css";

import { Provider } from 'react-redux'

import {store} from './redux/stores/store'

import { BrowserRouter as Router } from 'react-router'

ReactDOM.createRoot(document.getElementById('root')).render(
<Provider store={store}>
    <Router>
        <App />
    </Router>
</Provider>)
