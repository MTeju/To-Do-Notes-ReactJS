import './Note.css'

const Note = ( {id , text , date, handelDeleteNote} ) => {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <i onClick={() => handelDeleteNote(id)} className="fa-solid fa-trash-can dele-btn"></i>
      </div>
    </div>
  )
}

export default Note
