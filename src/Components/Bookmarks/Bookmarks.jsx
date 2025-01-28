import PropTypes from 'prop-types'; // ES6
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks,times}) => {
    return (
        <div className="w-1/3 border">
            <h1>Item Bookmarked : {bookmarks.length}</h1>
                         
        <div className="bg-gray-300 py-1">
        <div className="bg-white px-3 py-2 text-center m-2 rounded-md">
<p className="text-2xl font-bold ">Total Bookmark : {bookmarks.length}</p>

        </div>
        </div> 
        <div className="bg-gray-300 py-1">
        <div className="bg-white px-3 py-2 text-center m-2 rounded-md">
<p className="text-2xl font-bold ">Total Minutes : {times}</p>

        </div>
        </div> 
         
        {
    bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
        }
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks : PropTypes.array.isRequired
}
export default Bookmarks;

