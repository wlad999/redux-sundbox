import {bindActionCreators, createStore} from "redux";
import reducer from "./reducer"
import * as actions from "./actions"
import React from "react";
import ReactDOM from 'react-dom'
import Counter from "./counter";
// import {inc, dec, rnd} from "./actions"


const store = createStore(reducer)
const {dispatch} = store
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
const {inc, dec, rnd} = bindActionCreators(actions, dispatch)


const update = () => {
    ReactDOM.render(<Counter
        counter={store.getState()}
        inc={inc}
        dec={dec}
        rnd={() => {
            const value = Math.floor(Math.random() * 10)
            rnd(value)
        }}
    />, document.getElementById('root'))

}
update()
store.subscribe(update)
