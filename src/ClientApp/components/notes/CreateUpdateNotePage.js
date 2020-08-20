import React from 'react';
import { withRouter } from 'react-router-dom';

class CreateUpdateNotePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: '',
            message: '',
            submitted: false
        };

        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.loadNote = this.loadNote.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
      if (this.props.match.params.noteId) {
        this.loadNote();
      }
    }

    handleUserChange(e) {
        this.setState({ user: e.target.value });
    }

    handleMessageChange(e) {
        this.setState({ message: e.target.value });
    }

    async loadNote() {
      fetch(`/api/notes/${this.props.match.params.noteId}`)
      .then(rsp => rsp.json())
      .then(note => {
        this.setState(Object.assign({}, this.state, note));
      })
      .catch(err => {
        console.error(err);
      });
    }

    async handleSubmit(e) {
        e.preventDefault();

      var noteId = this.props.match.params.noteId;
      var url = noteId ? `/api/notes/${noteId}` : '/api/notes';
      var method = noteId ? 'PUT' : 'POST';

        fetch(url, {
            body: JSON.stringify(this.state),
            cache: 'no-cache',
            headers: {
                'content-type': 'application/json'
            },
            method: method
        })
            .then(rsp => {
                if (rsp.status === 201 || rsp.status === 204) {
                    this.props.history.push('/notes');
                }
            })
            .catch(err => {
                console.error(err);
            });
    }

    render() {
        if (this.state.submitted === true) {
            <Redirect to="/notes" />
        }
        return (
            <section>
            <h1>{this.props.match.params.noteId ? 'Update Note' : 'Create a Note'}</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-element">
                        <label>User</label>
                        <input
                            id="user" type="text"
                            value={this.state.user}
                            onChange={this.handleUserChange} />
                    </div>
                    <div className="form-element">
                        <label>Message</label>
                        <textarea
                            id="message"
                            cols="100"
                            rows="10"
                            value={this.state.message}
                            onChange={this.handleMessageChange} />
                    </div>
                    <div className="form-actions">
                        <input id="submit" type="submit" value="Submit Note" />
                    </div>
                </form>
            </section>
        );
    }

};

export default withRouter(CreateUpdateNotePage);