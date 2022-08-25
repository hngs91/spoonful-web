import useFetch from "./useFetch";
import BlogList from "./BlogList";

const Home = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    // const audio = new Audio("/cyclophosphamide.mp3")

    // const handleClick = () => {
    //     audio.play();
    // }

    return (
        <div className="home">
            {/* <div className="audio">
                <button onClick={handleClick}>Audio</button>
            </div> */}
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
        </div>
    );
}

export default Home;