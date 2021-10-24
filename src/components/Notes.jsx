import React from 'react'

function Notes(props) {
    return (
        <div className="note-card">
            {props.data.map(note => <div  className="card">{note.text}</div>)}
        </div>
    )
}

export default Notes
