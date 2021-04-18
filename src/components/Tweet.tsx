import React from 'react';
import CommentIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RepostIcon from '@material-ui/icons/RepeatOutlined';
import LikeIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShareIcon from '@material-ui/icons/ReplyOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import { Avatar, IconButton, Menu, MenuItem, Paper, Typography } from '@material-ui/core';

export const Tweet = () => {


	return (
		<a className={classes.tweetWrapper}>
			<Paper className={classNames(classes.tweet, classes.tweetsHeader)} variant="outlined">
				<Avatar className={classes.tweetAvatar} alt={`Аватарка пользователя ${user.fullname}`} />
				<div className={classes.tweetContent}>
					<div className={classes.tweetHeader}>
						<div>
							<b>{user.fullname}</b>&nbsp;
							<span className={classes.tweetUserName}>@{user.username}</span>&nbsp;
							<span className={classes.tweetUserName}>·</span>&nbsp;
							<span className={classes.tweetUserName}>{formatDate(new Date(createdAt))}</span>
						</div>
						<div>
							<IconButton
								aria-label="more"
								aria-controls="long-menu"
								aria-haspopup="true">
								<MoreVertIcon />
							</IconButton>
							<Menu anchorEl={anchorEl} >
								<MenuItem >Редактировать</MenuItem>
								<MenuItem >Удалить твит</MenuItem>
							</Menu>
						</div>
					</div>
					<Typography variant="body1" gutterBottom>
						{text}
						{images && <ImageList classes={classes} images={images} />}
					</Typography>
					<div className={classes.tweetFooter}>
						<div>
							<IconButton>
								<CommentIcon style={{ fontSize: 20 }} />
							</IconButton>
							<span>1</span>
						</div>
						<div>
							<IconButton>
								<RepostIcon style={{ fontSize: 20 }} />
							</IconButton>
						</div>
						<div>
							<IconButton>
								<LikeIcon style={{ fontSize: 20 }} />
							</IconButton>
						</div>
						<div>
							<IconButton>
								<ShareIcon style={{ fontSize: 20 }} />
							</IconButton>
						</div>
					</div>
				</div>
			</Paper>
		</a>
	);
};
