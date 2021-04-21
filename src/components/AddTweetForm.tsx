import React from 'react';
import classNames from 'classnames';
import Avatar from '@material-ui/core/Avatar';
import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import {useHomeStyles} from '../pages/theme';
import {useStylesSignIn} from "../pages/SingIn";

interface AddTweetFormProps {
	classes: ReturnType<typeof useHomeStyles>
}


export const AddTweetForm: React.FC<AddTweetFormProps> = ({classes}: AddTweetFormProps): React.ReactElement => {

	const [text, setText] = React.useState<string>('')

	const handleChangeTextArea = (e: React.FormEvent<HTMLTextAreaElement>) => {
		if (e.currentTarget) {
			setText(e.currentTarget.value)
		}
	}

	return (
		<div>
			<div className={classes.addFormBody}>
				<Avatar className={classes.tweetAvatar} alt={`Аватарка пользователя UserAvatar`}/>
				<TextareaAutosize
					onChange={handleChangeTextArea}
					className={classes.addFormTextarea}
					placeholder="Что происходит?"
					value={text}
					rowsMax={maxRows}
				/>
			</div>
			<div className={classes.addFormBottom}>
				<div className={classNames(classes.tweetFooter, classes.addFormBottomActions)}>
					<UploadImages images={images}/>
				</div>
				<div className={classes.addFormBottomRight}>
					{text && (
						<>
							<span>{textCount}</span>
							<div className={classes.addFormCircleProgress}>
								<CircularProgress
									variant="static"
									size={20}
									thickness={5}
									value={text.length >= MAX_LENGTH ? 100 : textLimitPercent}
									style={text.length >= MAX_LENGTH ? {color: 'red'} : undefined}
								/>
								<CircularProgress
									style={{color: 'rgba(0, 0, 0, 0.1)'}}
									variant="static"
									size={20}
									thickness={5}
									value={100}
								/>
							</div>
						</>
					)}
					<Button

						color="primary"
						variant="contained">
						/>
						) : (
						'Твитнуть'
						)}
					</Button>
				</div>
			</div>
			{addFormState === AddFormState.ERROR && (
				<Alert severity="error">
					Ошибка при добавлении твита{' '}
					<span aria-label="emoji-plak" role="img">
            😞
          </span>
				</Alert>
			)}
		</div>
	);
};
