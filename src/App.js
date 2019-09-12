//React Components
import React, { Component, Fragment } from "react";
//Notes Components
//Material-UI
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
//Notes COmponents
import NotesForm from "./NotesForm";
import NotesList from "./NotesList";
//Router
import { Link, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import Note from "./Note";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      description: "",
      notes: []
    }
  }
  //Clousures && Currying
  updateField = field => e => {
    this.setState({
      [field]: e.target.value
    });
  };
  saveNote = () => {
    if (this.state.title && this.state.description) {
      this.setState({
        notes: [
          ...this.state.notes,
          {
            id: Date.now(),
            title: this.state.title,
            description: this.state.description
          }],
        title: "",
        description: ""
      });
    }
  };
  deleteNote = noteId => {
    this.setState(state => {
      return { notes: state.notes.filter(note => note.id !== noteId) };
    });
  };

  render() {
    return (
      <Fragment>
        <Typography align="center" variant="h2" gutterBottom>
          My Notes
        </Typography>
        <Grid container justify="center" spacing={2}>
          <Grid item xs={4}>
            <NotesList notes={this.state.notes} deleteNote={this.deleteNote} />
          </Grid>
          <Grid item xs={8}>
            <Route exact path="/" component={Home} />
            <Route
              path="/add"
              render={() => (
                <NotesForm
                  title={this.state.title}
                  description={this.state.description}
                  updateField={this.updateField}
                  saveNote={this.saveNote}
                />
              )}
            />
            <Route
              path="/view/:id"
              render={props => {
                const note = this.state.notes.filter(
                  note => note.id === parseInt(props.match.params.id)
                  )[0];
                return note ? <Note note={note} /> : <Redirect to="/" />;
              }}
            />
          </Grid>
        </Grid>
        <Fab color="primary" className="addIcon" component={Link} to="/add">
          <AddIcon />
        </Fab>
      </Fragment>
    )
  }
}
export default App;