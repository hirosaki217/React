import {ADD_TODO, SET_INPUT} from './constants'

export const setInput = payload =>({
    type: SET_INPUT,
    payload,
})

export const addTodo = payload =>({
    type: ADD_TODO,
    payload,
})