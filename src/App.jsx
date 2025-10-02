import { useState, useEffect } from 'react'
import './css/App.css'
import Note from './components/Note'
import MathEditor from './components/MathEditor'
import { helpText } from './Help'

function App() {
  const [notes, setNotes] = useState(localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes')) : [])
  const [currentNote, setCurrentNote] = useState(null)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [editing, setEditing] = useState(false);
  useEffect(() => {
    if (!currentNote) return
    const id = currentNote.id
    setNotes((prev) =>
      prev.map((note) => (note.id === id ? { ...note, title: title, content: content } : note))
    )
  }, [title, content])

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  useEffect(() => {
    if (!currentNote) return;
    setTitle(currentNote.title || '');
    setContent(currentNote.content || '');
    console.log(currentNote.content)
  }, [currentNote])

  const addNote = () => {
    const newNote = { id: new Date().getTime(), title: '', content: '', date: new Date().toISOString().slice(0, 10) }
    setNotes((prev) => [newNote, ...prev])
    setCurrentNote(newNote)
    setEditing(true);
  }

  const notepad = () => {
    if (!currentNote) {
      return (
        <h3 style={{ textAlign: 'center', marginTop: '300px' }}>Select a note to start writing</h3>
      )
    }
    return (
      <div className="notepad-container">
        <div className="title-container">
          <input
            type="text"
            className="note-title-input"
            placeholder="Note title..."
            value={title}
            onChange={(e) => {
              setTitle(e.target.value)
            }}
          />
          <button className='add-btn' style={{position: 'absolute', right: 20, width: 100, height: 40, fontSize: 20}} onClick={() => setEditing(prev => !prev)}>{editing? 'Editing': 'Viewing'}</button>
        </div>
        <div className="math-editor-container">
          <MathEditor value={content} onChange={setContent} id={currentNote.id} edit={editing}/>
        </div>
      </div>
    )
  }


  return (
    <div style={{ display: 'flex', flexDirection: 'row', overflow: 'hidden'}}>
      <div className="files-container">
        <div className="files-header" onClick={(e) => {if (e.target.className != "add-btn")setCurrentNote(null);}}>
          <div className="header-top">
            <h2 style={{ fontWeight: '600' }}>Notes</h2>{' '}
            <button className="add-btn" onClick={addNote}>
              +
            </button>
          </div>
          <input type="text" className="search-bar" placeholder="Search notes..." />
        </div>
        <div className="notes">
          {notes.length === 0 && (
            <p style={{ textAlign: 'center', marginTop: '30px' }}>No notes found</p>
          )}
          {notes.map((note) => (
            <Note
              key={note.id}
              title={note.title}
              content={note.content}
              date={note.date}
              active={currentNote && currentNote.id === note.id}
              onClick={() => setCurrentNote(note)}
              onDelete={() => {
                setNotes(notes.filter((n) => n.id !== note.id))
                if (currentNote && currentNote.id === note.id) setCurrentNote(null)
              }}
            />
          ))}
          <Note key={0} id={0}title={'#HELP'} active={currentNote && currentNote.id === 0} onClick={() => setCurrentNote({id: 0, title: '#HELP', content: helpText})}/>
        </div>
      </div>
      <div className="notepad">{notepad()}</div>
    </div>
  )
}

export default App

/*
id
title
content
date
active
*/