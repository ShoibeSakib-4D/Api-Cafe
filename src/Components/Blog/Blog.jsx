import PropTypes from 'prop-types'; // ES6
import { LuBookmarkCheck } from "react-icons/lu";


const Blog = ({blog,handleBookmark,handleReadingTime}) => {
    const {id,author, cover, author_img,posted_date,reading_time,title,hashtag } = blog;
    return (
 <>
    <div className='m-5'>
         <div >
            <img className='rounded-[24px]' src={cover} alt="" />
        </div>

        <div className='flex justify-between'>
            <div className='flex gap-5 m-4'>
                <div className='w-16 rounded-full '>
                   <img className='rounded-full' src={author_img} alt="" />

                </div>
                <div>
                    <h2 className='font-bold'>{author}</h2>
                    <p>{posted_date}</p>

                </div>
            </div>
            <div className='flex gap-2 items-center '>
                  <p>{reading_time} min read </p>
                 <button onClick={()=>handleBookmark(blog)}> <span><LuBookmarkCheck />
                 </span></button> 
                  </div>
        </div>

        <div className='border-b-2 py-4 space-y-3'>
        <h1 className='font-bold text-4xl'>{title}</h1>
        <p>{hashtag}</p>
        <button onClick={()=>handleReadingTime(id,reading_time) } className='underline'>Mark As Read</button>
     </div>
     </div>
     
    </>
    );
};

Blog.propTypes = {
    blog : PropTypes.object.isRequired,
    handleBookmark : PropTypes.func.isRequired,
    handleReadingTime : PropTypes.func.isRequired
}
export default Blog;