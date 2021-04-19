import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


export const ModalBlock = () => {


	return (
		<Dialog  aria-labelledby="form-dialog-title">
			<DialogTitle id="form-dialog-title">
				<IconButton  color="secondary" aria-label="close">
					<CloseIcon style={{ fontSize: 26 }} color="secondary" />
				</IconButton>
				{title}
			</DialogTitle>
			<DialogContent>{children}</DialogContent>
		</Dialog>
	);
};
