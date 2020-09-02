import {bindActionCreators, createStore} from "redux";
import reducer from "./reducer"
import * as actions from "./actions"
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


document.getElementById('inc').addEventListener('click', inc)
document.getElementById('dec').addEventListener('click', dec)
document.getElementById('rnd').addEventListener('click', () => {
    const payload = Math.floor(Math.random() * 10)
    rnd(payload)
})


const update = () => {
    document.getElementById('counter').innerHTML = store.getState()
}
store.subscribe(update)

