import React from 'react'

function Notes(props) {
    return (
        <div>
            {props.data.map(note => <div>{note.text}</div>)}
        </div>
    )
}

export default Notes
