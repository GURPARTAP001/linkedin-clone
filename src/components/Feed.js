import React, { useEffect, useState } from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
import { db } from '../firebase';
import { addDoc, collection, getDocs ,orderBy,query} from 'firebase/firestore';
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

function Feed() {

  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);


  const colref = collection(db, "posts")
  const d=query(colref,orderBy("timestamp","desc"))
  // as we have not given any thing in the [] (we passed a blank dependency) of the useEffect so this work work only when the feed component render initially
  useEffect(() => {
    //now here we will create a real time listner which will setpost when ever  the data base is updated 

    //1st: we went inside the posts collection present in the db
    //2nd: using the onSnapshot we will get the real time snap of the post collection as soon as it is changed
    //3rd: now every time the post change we want to update our posts state
    // 4th: so we map throught the docs (in a collection there are many docs)
    // 5th :for every single doc inside the docs we will return object
    // 6th: it will return the object with the id and the data inside that doc

    // /the below line get us inside the database or the collection reference where we want to go
    
    // the getDocs return us the snapshots of the data base
    getDocs(d)
      .then((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        ))
      .catch(err => {
        console.log(err.message);
      })
  }, [getDocs(colref)])


  const sendPost = (e) => {
    e.preventDefault();
    // const colref = collection(db, "posts");
    addDoc(colref, {
      name: "Gurpartap Singh",
      description: "this is a test",
      message: input,
      photUrl: "",
      timestamp: firebase.firestore.Timestamp.now(),

    })
    setInput('')
  }

  return (
    <div className='feed'>
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form >
            <input value={input} onChange={e => setInput(e.target.value)} type="text" />
            <button onClick={sendPost} type='submit'>Send</button>
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
      {/* we have destructured everything that we got from the database using the useEffect */}
      {posts.map(({id,data:{name ,description,message,photoUrl} }) => (
      <Post
        key={id}
        name={name}
        description={description}
        message={message}
        photoUrl={photoUrl}
      />
      ))}


    </div>
  )
}

export default Feed
