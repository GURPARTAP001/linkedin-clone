import React from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';

function Feed() {
  return (
    <div className='feed'>
      <div className="feed__inputContainer">
        <div className="feed__input">
            <CreateIcon/>
            <form >
                <input type="text" />
                <button type='submit'>Send</button>
            </form>
        </div>

        <div className="feed__inputOptions">
            <InputOption Icon={ImageIcon} color="#70B5F9" title="Photo" />
            <InputOption Icon={SubscriptionsIcon} color="#E7A33E" title="Video" />
            <InputOption Icon={EventNoteIcon} color="#C0CBCD" title="Event" />
            <InputOption Icon={CalendarViewDayIcon} color="#7FC15E" title="Write article" />
        </div>
      </div>


        {/* Posts */}
        <Post name="Gurpartap Singh" description="This is the test code" 
        message="Wow this works" />


    </div>
  )
}

export default Feed
