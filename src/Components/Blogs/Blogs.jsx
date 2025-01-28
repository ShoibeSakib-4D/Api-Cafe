import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types'; // ES6

const Blogs = ({handleBookmark,handleReadingTime}) => {
 
     const [blogs, setBlogs] = useState([])

    useEffect(()=>{
        fetch('Blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div className="w-2/3 border">
             <h1>All Blogs :{blogs.length}</h1>

            {
        blogs.map(blog => <Blog handleReadingTime={handleReadingTime} handleBookmark={handleBookmark} key={blog.id} blog={blog}></Blog>)
            }
             
        </div>
       
    );
};

Blogs.propTypes = {
    handleBookmark : PropTypes.func.isRequired,
    handleReadingTime : PropTypes.func.isRequired
    
}
export default Blogs;