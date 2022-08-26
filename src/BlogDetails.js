import { useParams } from "react-router-dom";
import useFetch from './useFetch';
import { Link } from "react-router-dom";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/medicines/' + id)


    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h1>{blog.drugname}</h1>
                    <h4>What does it do?</h4>
                    <p>{blog.what}</p>
                    <h4>How do you take it?</h4>
                    <p>{blog.with}</p>
                    <h4>Call your Doctor if:</h4>
                    <p>{blog.call}</p>
                    <div>
                        <Link to='/'>Search again</Link>
                    </div>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;