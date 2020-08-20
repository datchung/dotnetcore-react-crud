import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

export default class NotesPage extends React.Component{
  constructor(){
    super();
    this.state = { notes: [] };
  }

  componentDidMount(){
    $.get("/api/notes")
      .done((data) => {
        this.setState({ notes: data });
      })
      .fail(err => console.error(err));
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