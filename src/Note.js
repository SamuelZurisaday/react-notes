import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";

const Note = ({ note }) => {
    
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
