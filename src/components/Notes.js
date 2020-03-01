import React from 'react';

export const Notes = ({notes ,  onRemove , alert}) => {


     return(
          <ul className = "list-group">
               {notes.map(note => {
                    return  <li 
                    className="list-group-item note"
                    key={note.id}
               >
                    <div>
                    <strong>{note.title}</strong>
                    <small>{note.date} <i className="fas fa-hourglass-end"></i> </small>
                    </div>
                    <button
                         type="button"
                         className="btn btn-outline-danger btn-sm"
                         onClick={() => {
                              onRemove(note.id)
                              alert.show('Заметка была удаленна', 'secondary')
                         }}
                    > &times;</button>
                    </li>
               })} 
          </ul>
 )
}