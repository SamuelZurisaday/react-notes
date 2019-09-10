import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";

const Note = props => {
    console.log(props.match.params.id);
    console.log(props.notes);

    //const note =
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
