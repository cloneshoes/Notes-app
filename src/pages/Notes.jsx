import { useState, useEffect } from "react";

function Notes() {
  // Load from localStorage directly in initial state
  const [notes, setNotes] = useState(() => {
    const storedNotes = localStorage.getItem("notes");
    return storedNotes ? JSON.parse(storedNotes) : []; // start empty if nothing in storage
  });

  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  // Save notes to localStorage whenever notes change
  useEffect(() => {
    console.log("Saving notes:", notes);
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  // Add a new note
  const addNote = () => {
    if (input.trim() === "") return;
    if (editIndex !== null) {
      const updatedNotes = [...notes];
      updatedNotes[editIndex] = input;
      setNotes(updatedNotes);
      setEditIndex(null);
    } else {
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
