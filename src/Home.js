import useFetch from "./useFetch"
import BlogList from "./BlogList"
import { useState } from 'react'

const Home = () => {
    const { data, isPending, error } = useFetch('http://localhost:8000/medicines')

    const [filteredData, setFilteredData] = useState([])

    const [selectedDrug, setSelectedDrug] = useState([])

    const [value, setValue] = useState("")

    const onChange = (event) => {
        setValue(event.target.value)
        setFilteredData(data.filter(item => {
            const searchTerm = value.toLowerCase()
            const drugName = item.drugname.toLowerCase();
            return searchTerm && drugName.startsWith(searchTerm) && drugName !== searchTerm
        }))
    }

    // const audio = new Audio("/cyclophosphamide.mp3")

    // const handleClick = () => {
    //     audio.play();
    // }

    return (
        <div className="home">
            {/* <div className="audio">
                <button onClick={handleClick}>Audio</button>
            </div> */}

            <div className="search-container">
                <div className="search-inner"></div>
                <input type="text" value={value} onChange={onChange} />
            </div>

            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {data && <BlogList blogs={filteredData} />}
        </div>
    );
}

export default Home;