import React , {Fragment , useContext , useEffect} from 'react'
import { Forms } from '../components/Form'
import { Notes } from '../components/Notes'
import { FirebaseContext } from '../context/firebase/firebaseContext'
import { Preloader } from '../components/Preloader'
import { AlertContext } from '../context/alert/alertContext'


export const Home = () => {

     const {loading, notes, setNotes, removeNote} = useContext(FirebaseContext)
     const alert = useContext(AlertContext)
     // const notes = new Array(4)
     // .fill('')
     // .map(( _ , i ) => ({id:i, title:`note${i+1}`}))
    
     //componentDidMount on Hooks
     useEffect(() => {
          setNotes()
        }, [])
     return (
          <Fragment>
               <h1>Список заметок</h1>
               <Forms />
               <hr/>
               {loading
        ? <Preloader />
        : <Notes notes={notes} onRemove={removeNote} alert={alert}  />
      } 
          </Fragment>
     )
}
