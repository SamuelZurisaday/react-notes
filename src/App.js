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
import {Link} from "react-router-dom";

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
  }
  render() {
    return (
      <Fragment>
        <Typography align="center" variant="h2" gutterBottom>
          My Notes
        </Typography>
        <Grid container justify="center" spacing={2}>
          <Grid item xs={4}>
            <NotesList notes={this.state.notes}/>
          </Grid>
          <Grid item xs={8}>
            <NotesForm updateField={this.updateField} saveNote={this.saveNote} title={this.state.title} description={this.state.description}/>
          </Grid>
        </Grid>
        <Fab color="primary" className="addIcon" component={Link} to="/addSS">
          <AddIcon/>
        </Fab>
      </Fragment>
    )
  }
}
export default App;
