import React from "react"
import {Button, makeStyles, Typography} from "@material-ui/core";
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import PeopleIcon from '@material-ui/icons/PeopleOutline';
import MessageIcon from '@material-ui/icons/ModeCommentOutlined';

export const useStylesSignIn = makeStyles((theme) => ({
	wrapper: {
		display: 'flex',
		height: 'calc(100vh - 84px)',
	},
	blueSide: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#71C9F8',
		flex: '0 0 50%',
		overflow: 'hidden',
		position: 'relative',
	},
	blueSideBigIcon: {
		position: 'absolute',
		left: '50%',
		top: '50%',
		transform: 'translate(-50%, -50%)',
		width: '350%',
		height: '350%',
	},
	blueSideListInfo: {
		position: 'relative',
		listStyle: 'none',
		padding: 0,
		margin: 0,
		width: 380,
		'& h6': {
			display: 'flex',
			alignItems: 'center',
			color: 'white',
			fontWeight: 700,
			fontSize: 20,
		},
	},
	blueSideListInfoItem: {
		marginBottom: 40,
	},
	blueSideListInfoIcon: {
		fontSize: 32,
		marginRight: 15,
	},
	loginSide: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flex: '0 0 50%',
	},
	loginSideTwitterIcon: {
		fontSize: 45,
	},
	loginSideWrapper: {
		width: 380,
	},
	loginSideTitle: {
		fontWeight: 700,
		fontSize: 32,
		marginBottom: 60,
		marginTop: 20,
	}
}))

export const SignIn: React.FC = (): React.ReactElement => {
	const classes = useStylesSignIn()

	const [visibleModal, setVisibleModal] = React.useState<'signIn' | 'signUp'>()

	const handleClickOpenSignIn = (): void => {
		setVisibleModal('signIn')
	}

	const handleClickOpenSignUp = (): void => {
		setVisibleModal('signUp')
	}

	const handleCloseModal = (): void => {
		setVisibleModal(undefined)
	}

	return (
		<div className={classes.wrapper}>
			<section className={classes.blueSide}>
				<TwitterIcon color="primary" className={classes.blueSideBigIcon}/>
				<ul className={classes.blueSideListInfo}>
					<li className={classes.blueSideListInfoItem}>
						<Typography variant='h6'>
							<SearchIcon className={classes.blueSideListInfoIcon}/>
							?????????????? ?? ??????, ?????? ?????? ??????????????????.</Typography></li>
					<li className={classes.blueSideListInfoItem}>
						<Typography variant='h6'>
							<PeopleIcon className={classes.blueSideListInfoIcon}/>
							??????????????, ?? ?????? ?????????????? ?? ????????.</Typography></li>
					<li className={classes.blueSideListInfoItem}><Typography variant='h6'>
						<MessageIcon className={classes.blueSideListInfoIcon}/>
						?????????????????????????????? ?? ??????????????.</Typography></li>
				</ul>
			</section>
			<section className={classes.loginSide}>
				<div className={classes.loginSideWrapper}>
					<TwitterIcon color="primary" className={classes.loginSideTwitterIcon}/>
					<Typography className={classes.loginSideTitle} gutterBottom variant="h4">??????????????, ?????? ???????????????????? ??
						???????? ?????????? ????????????</Typography>
					<Typography><b>?????????????????????????????? ?? ???????????????? ?????????? ????????????!</b></Typography>
					<br/>
					<Button style={{marginBottom: 20}} variant="contained" color="primary"
							fullWidth>????????????????????????????????????</Button>
					<Button variant="outlined" color="primary" fullWidth>??????????</Button>
				</div>
			</section>
		</div>
	)
}

export default SignIn