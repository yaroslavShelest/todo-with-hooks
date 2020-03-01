import React, {useReducer} from 'react'
import {FirebaseContext} from './firebaseContext'
import {firebaseReducer} from './firebaseReducer'
import axios from 'axios'
import {ADD_NOTE, SET_NOTES, REMOVE_NOTE, SHOW_LOADER , EMPTY_NOTES} from '../types'

// const env.local
const url = process.env.REACT_APP_DATABASE_URL

export const FirebaseState = ({children}) => {
     //start state
     const initialState = {
          notes: [],
          loading: false
        }
      //init state with Hook useReducer  
     const [state, dispatch] = useReducer(firebaseReducer, initialState)
     // action
     const showLoader = () => dispatch({type: SHOW_LOADER})

     //asynchronous request
     const setNotes = async () => {
          showLoader()
          // We are waiting for a response from the request using await
          const response = await axios.get(`${url}/notes.json`)
          // from the object we create an array
          if(response.data === null) {
               return  dispatch({type: EMPTY_NOTES })
          }
          const payload = Object.keys(response.data).map(key => {
               return  {
                 ...response.data[key],
                 id: key
               } 
     })
     
     dispatch({type: SET_NOTES, payload})
     console.log('notes' , response.data )
     console.log('payload' , payload )
}

     const addNote = async title => {
          const note = {
            title, date: new Date().toJSON()
          }
          try {
               const response = await axios.post(`${url}/notes.json`, note)
               console.log('notes post' , response.data )
               const payload = {
                    ...note,
                    id: response.data.name
                  }
            
                  dispatch({type: ADD_NOTE, payload})
          } catch(e) {
               throw new Error(console.log(e.message))
               
          }
         

         
     }

     const removeNote = async id => {
          await axios.delete(`${url}/notes/${id}.json`)

          dispatch({
               type: REMOVE_NOTE,
               payload: id
             })
     }
    // Context Provider on all app//export
     return (
          <FirebaseContext.Provider value={{
               showLoader, addNote, removeNote, setNotes,
               loading: state.loading,
               notes: state.notes
             }}  >
            {children}
          </FirebaseContext.Provider>
        )
}