import React, { Fragment } from 'react';
import TextField  from '@material-ui/core/TextField';
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import Icon from "@material-ui/core/Icon";


const NotesForm = ({ title, description, updateField, saveNote }) => {
    return (
        <Fragment>
            <Grid item xs={12}>
                <TextField
                    type="text"
                    label="Title"
                    margin="normal"
                    fullWidth
                    onChange={updateField("title")}
                    value={title}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    multiline
                    rows="4"
                    placeholder="Start taking notes..."
                    margin="normal"
                    fullWidth
                    onChange={updateField("description")}
                    value={description}
                />
            </Grid>
            <Fab color="secondary" className="editIcon" onClick={saveNote}>
                <Icon>edit_icon</Icon>
            </Fab>
        </Fragment>
    );
}

export default NotesForm;