
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
   const [bookmarks, setBookmarks] = useState([])
   const [times, setTimes] = useState(0)

  function handleBookmark (blog)
  {
    const setNewBookmark = [...bookmarks, blog]
    setBookmarks(setNewBookmark)
  }
 
  function handleReadingTime (id,time)
  {
    const newTime = times + time;
    setTimes(newTime)

    const newBookMark = bookmarks.filter(blog => blog.id != id);
      setBookmarks(newBookMark);
  }

  return (
    <>
    <Header></Header>
<div className='md:flex mt-5'>
<Blogs handleReadingTime={handleReadingTime}  handleBookmark={handleBookmark}></Blogs>
<Bookmarks times={times} bookmarks={bookmarks}></Bookmarks>
</div>
    </>
  )
}

export default App
