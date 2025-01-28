import PropTypes from 'prop-types'; // ES6

const Blog = ({blog}) => {
    return (
        <div>
            <h1> Author : {blog.author}</h1>
        </div>
    );
};

Blog.propTypes = {
    blog : PropTypes.object.isRequired
}
export default Blog;