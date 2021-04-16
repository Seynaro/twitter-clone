import React from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Dialog } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";

interface ModalProps {
	title: string
	children: React.ReactNode
}

export const ModalBlock: React.FC<ModalProps> = ({title, children}: ModalProps): React.ReactElement => {
	const [open, setOpen] = React.useState(false)

	const handleClickOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}

	return (
		<Dialog open={open}
	onClose = {handleClose}
	aria - Labelledby = 'form-dialog-'
		< DialogTitle
	id = 'form-dialog-title' >
	<IconButton onClick = {handleClose}
	color = "secondary"
	aria - Label = ""
		< CloseIcon
	style = {
	{
		fontSize: }
}
	color = "secondary" / >
		</IconButton>
	Войти
	в
	Твиттер
	< /DialogTitle>
	< DialogContent >
	<FormControl component = "fieldset"
	fullWidth >
	<FormGroup aria - label = "position"
	row >
	<TextField className = {classnames.loginSideField}
	autoFocus
	id = "email"
	label = "E-Mail"
	InputLabelProps = {
	{
		shrink: true,
	}
}
	variant = "filled"
	type = "email"
)
}