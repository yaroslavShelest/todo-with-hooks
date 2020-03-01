import {ADD_NOTE, SET_NOTES, REMOVE_NOTE, SHOW_LOADER , EMPTY_NOTES} from '../types'

const handlers = {
     [SHOW_LOADER]: state => ({...state, loading: true}),
     [ADD_NOTE]: (state, {payload}) => ({
       ...state,
       notes: [...state.notes, payload]
     }),
     [SET_NOTES]: (state, {payload}) => ({...state, notes: payload, loading: false}),
     [EMPTY_NOTES]: (state) => ({...state, loading: false}),
     [REMOVE_NOTE]: (state, {payload}) => ({
       ...state,
       notes: state.notes.filter(note => note.id !== payload)
     }),
     DEFAULT: state => state
   }
   
   export const firebaseReducer = (state, action) => {
     const handle = handlers[action.type] || handlers.DEFAULT
     return handle(state, action)
   }