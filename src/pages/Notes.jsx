import { useState } from "react";

function Notes() {
  const [notes, setNotes] = useState(["Buy groceries", "Finish project"]);
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  // Add a new note
  const addNote = () => {
    if (input.trim() === "") return;
    if (editIndex !== null) {
      // update existing note
      const updatedNotes = [...notes];
      updatedNotes[editIndex] = input;
      setNotes(updatedNotes);
      setEditIndex(null);
    } else {
      // add new note
      setNotes([...notes, input]);
    }
    setInput("");
  };

  // Delete note
  const deleteNote = (index) => {
    const filtered = notes.filter((_, i) => i !== index);
    setNotes(filtered);
  };

  // Edit note
  const editNote = (index) => {
    setInput(notes[index]);
    setEditIndex(index);
  };

  return (
    <div className="notes">
      <h2>Your Notes</h2>

      {/* Input box */}
      <div className="note-input">
        <input
          type="text"
          placeholder="Write a note..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addNote}>
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </div>

      {/* Notes list */}
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            {note}
            <div className="actions">
              <button onClick={() => editNote(index)}>✏️ Edit</button>
              <button onClick={() => deleteNote(index)}>🗑 Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notes;
