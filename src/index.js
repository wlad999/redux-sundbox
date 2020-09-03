import {createStore} from "redux";
import reducer from "./reducer"
import React from "react";
import ReactDOM from 'react-dom'
import App from "./components/app";
import {Provider} from "react-redux"


const store = createStore(reducer)

//custom function
// const bindActionCreator = (creator, dispatch) => (...args) => {
//     dispatch(creator(...args))
// }

// const {incDispatch, decDispatch, rndDispatch} = bindActionCreators(
//     {
//         incDispatch: inc,
//         decDispatch: dec,
//         rndDispatch: rnd
//     }, dispatch)
// const {inc, dec, rnd} = bindActionCreators(actions, dispatch)


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'))

