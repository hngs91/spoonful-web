import { useParams } from "react-router-dom";
import useFetch from './useFetch';

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/medicines/' + id)


    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.drugname}</h2>
                    <p>{blog.what}</p>
                    <div>{blog.with}</div>
                    <div>{blog.call}</div>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;