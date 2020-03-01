import React , {useState , useContext} from 'react';
import {AlertContext} from '../context/alert/alertContext'
import { FirebaseContext } from '../context/firebase/firebaseContext';

export const Forms = () => {
  const [value, setValue] = useState('')
  const alert = useContext(AlertContext)
  const firebase = useContext(FirebaseContext)


  const submitHandler = event => {
    event.preventDefault() 

    if (value.trim()) {
      firebase.addNote(value.trim()).then(() => {
        alert.show('Заметка была создана', 'success')
      }).catch(() => {
        alert.show('Что-то пошло не так.. Произошла ошибка', 'danger')
      })
    
      setValue('')
  } else {
    alert.show('Введите название заметки! Нельзя отправить пустое значение!')
  }
  }
     return(
     <form onSubmit={submitHandler}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Введите название заметки"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </div>  
     </form>
 )
}