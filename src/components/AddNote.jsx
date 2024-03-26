import './Note.css'
import './AddNote.css'
import { useState } from 'react'

const AddNote = ({handleAddNote}) => {

    const [noteText, setNoteText] = useState('');

    const charecterLimit = 150;

    const handelChange = (e) => {
      if(charecterLimit - e.target.value.length >= 0 ){
        setNoteText(e.target.value)
      }
      
    }

    const handelAddNoteSave = () => {
      if(noteText.trim().length >0 ){
        handleAddNote(noteText);
        setNoteText('');
      }
    }

  return (
    <div className='note new'>
        <textarea 
            cols="10" 
            rows="8" 
            placeholder='Enter the Task...' 
            onChange={handelChange} 
            value={noteText}
        ></textarea>

      <div className="note-footer">
        <small>{charecterLimit - noteText.length} Remaining</small>
        <button className='save-btn' onClick={handelAddNoteSave}><i className="fa-solid fa-circle-arrow-right"></i></button>
      </div>
    </div>
  )
}

export default AddNote
