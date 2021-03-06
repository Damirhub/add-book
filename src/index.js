import React from "react"
import ReactDOM from "react-dom"
import { createStore, applyMiddleware, compose } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
// import logger from "redux-logger"
import rootReducer from "./store/reducers/reducer"
import "./index.css"
import App from "./App"


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
)

const app = (
    <div className="App">
        <Provider store={store}>
                <App />
        </Provider>
    </div>
)

const rootElement = document.getElementById("root")
ReactDOM.render(app, rootElement)