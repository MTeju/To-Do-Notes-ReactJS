import NotesList from "./components/NotesList"
import './App.css'
import { useState , useEffect } from "react"
import { nanoid } from "nanoid";
import Header from "./components/Header";
import Search from "./components/Search";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'This is First Note',
      date :'15/02/2024'
    },

    {
      id: nanoid(),
      text: 'This is Second Note',
      date :'10/03/2024'
    },

    {
      id: nanoid(),
      text: 'This is Third Note',
      date :'15/03/2024'
    },

    {
      id: nanoid(),
      text: 'This is Fourth Note',
      date :'17/03/2024'
    },

]);

const [searchText, setSearchText] = useState('');

useEffect(() => {
  const savedNotes = JSON.parse(localStorage.getItem('todo-notes-app-data'));
  

  if (savedNotes) {
    setNotes(savedNotes);
  }
}, []);


useEffect(() => {
  localStorage.setItem('todo-notes-app-data', 
    JSON.stringify(notes)
  );
}, [notes]);

const addNote = (text) => {
  const date = new Date();
  const newNote = {
    id : nanoid(),
    text : text,
    date : date.toLocaleDateString()
  };

  const Notes = [...notes , newNote];

  setNotes(Notes);
}

  const deleteNote = (id) => {
   const newNotes = notes.filter((note) => note.id !== id);
   setNotes(newNotes);
  }
 

  return (
      <div>
      <Header />
        <div className="container">
          <NotesList 
            notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))} 
            handleAddNote={addNote} 
            handelDeleteNote={deleteNote} 
          />
        </div>
        <Search handelSearchNote={setSearchText}/>
      </div>
  )
}

export default App
