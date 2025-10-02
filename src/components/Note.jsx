import '../css/Note.css'

function Note({ id, title, content, date, active, onClick, onDelete }) {
  return (
    <div
      className="note-container"
      style={{ borderLeft: active ? '4px solid #007bff' : '4px solid transparent', position: 'relative' }}
      onClick={onClick}
    >
      <h3 className="note-title">{title || 'Untitled'}</h3>
      <p className="note-content">{content?`${content.slice(0, 30)}...` : id != 0?'No content': ''}</p>
      <span className="note-date">{date}</span>
      {id != 0 && <button
        className="note-delete-btn"
        onClick={e => {
          e.stopPropagation();
          onDelete && onDelete();
        }}
      >
        Delete
      </button>}
    </div>
  )
}

export default Note