import React from 'react';
import { withRouter } from 'react-router-dom';

class CreateNotePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: '',
            message: '',
            submitted: false
        };

        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUserChange(e) {
        this.setState({ user: e.target.value });
    }

    handleMessageChange(e) {
        this.setState({ message: e.target.value });
    }

    async handleSubmit(e) {
        e.preventDefault();
        fetch('/api/notes', {
            body: JSON.stringify(this.state),
            cache: 'no-cache',
            headers: {
                'content-type': 'application/json'
            },
            method: 'POST'
        })
            .then(rsp => {
                if (rsp.status === 201) {
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
                <h1>Create a Note</h1>
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

export default withRouter(CreateNotePage);