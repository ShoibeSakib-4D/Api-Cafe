import PropTypes from 'prop-types'; // ES6

const Bookmark = ({bookmark}) => {
    return (
        
                    
        <div className="bg-gray-300 py-1 ">
        <div className="bg-white px-3 py-2 text-center m-2 rounded-md">
<p className="text-2xl font-bold ">{bookmark.title}  </p>

        </div>
     </div> 
             
    );
};
Bookmark.propTypes = {
    bookmark : PropTypes.object.isRequired
}
export default Bookmark;
