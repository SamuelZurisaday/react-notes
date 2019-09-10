import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";

const Note = props => {
    
    const note = props.notes.filter(note => note.id === parseInt(props.match.params.id))[0];
return (
        <Fragment>
            <Typography align="center" variant="h4" gutterBotton>
            {note.title}
            </Typography>
            <Typography align="justify" variant="subtitle1">
            {note.description}
            </Typography>
        </Fragment>
    );
};

export default Note;
