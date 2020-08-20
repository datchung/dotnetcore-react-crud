import React from 'react';
import { Link } from 'react-router-dom';

export default class NotesPage extends React.Component {
  constructor() {
    super();
    this.state = { notes: [] };
  }

  componentDidMount() {
    fetch("/api/notes")
      .then(rsp => rsp.json())
      .then(notes => {
        this.setState({ notes: notes });
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
      <section>
        <h1>My Notes</h1>
        <Link to="/notes/create" className="btn btn-primary">Create a Note</Link>
        <ul>
          {
            this.state.notes.map(note => {
              return <li key={note.noteId}>
                <Link to={`/notes/update/${note.noteId}`}>
                  {note.message}
                </Link>
              </li>;
            })
          }
        </ul>
      </section>
    )
  }
}