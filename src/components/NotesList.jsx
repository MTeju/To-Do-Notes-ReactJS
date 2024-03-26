import AddNote from "./AddNote";
import Note from "./Note"
import './NotesList.css'


const NotesList = ({ notes, handleAddNote, handelDeleteNote }) => {
  return (
    <div className="notes-list">
      {notes.map((note, index) => 
      
      <Note id={note.id} 
        text={note.text} 
        date={note.date} 
        key={index} 
        handelDeleteNote = {handelDeleteNote}
      />)}
     
      <AddNote handleAddNote={handleAddNote} />
    </div>
  )
};


export default NotesList
