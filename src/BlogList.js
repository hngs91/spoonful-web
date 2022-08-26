import { Link } from "react-router-dom"

const BlogList = ({ blogs: data }) => {
    return (
        <div className="blog-list">
            {data.map((item) => (
                <div className="blog-preview" key={item.id}>
                    <Link to={`/medicines/${item.id}`}>
                        <h2>{item.drugname}</h2>

                    </Link>
                </div>
            ))}
        </div>
    );
}

export default BlogList;