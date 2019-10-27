import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


/***
 * 
 * props
 * 
 * open
 * handleClose
 * handleOk
 * title: Titulo de AlertDialog
 * content: Contenido, texto del dialogo
 * 
 * buttonTextOk
 * buttonTextCancel
*/

export default function AlertDialog(props) {
    return (
        <div>
            <Dialog
                open={props.open}
                onClose={props.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{props.title}</DialogTitle>
                <DialogContent dividers>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {props.content}
                        </DialogContentText>
                    </DialogContent>
                </DialogContent>

                <DialogActions>
                    <Button onClick={props.handleClose} variant='contained'>
                        {props.buttonTextCancel}
                    </Button>
                    <Button onClick={props.handleOk} color="primary" variant='contained'>
                        {props.buttonTextOk}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}