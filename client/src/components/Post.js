import { Avatar } from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';
import React from 'react';
import '../styles/Post.css';

function Post({ displayName, username, verified, text, image, avatar }) {
  return (
    <div className='post'>
      <div className='post__avatar'>
        <Avatar src='https://lh3.googleusercontent.com/a-/AOh14GgikuRC35NeM7AslgWBGDdARkcs1dzhDah7qqnVWw=s96-c' />
      </div>
      <div className='post__body'>
        <div className='post__header'>
          <div className='post__headerText'>
            <h3>
              Karsen Hansen{' '}
              <span className='post__headerSpecial'>
                <VerifiedUserIcon className='post__badge' />
                @karsenh
              </span>
            </h3>
          </div>
          <div className='post__headerDescription'>
            <p>Challenge to build a Twitter clone with React accepted.</p>
          </div>
        </div>
        <img
          src='https://media3.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif'
          alt='gif post'
        />
        <div className='post__footer'>
          <ChatBubbleOutlineIcon fontSize='small' />
          <RepeatIcon fontSize='small' />
          <FavoriteBorderIcon fontSize='small' />
          <PublishIcon fontSize='small' />
        </div>
      </div>
    </div>
  );
}

export default Post;
