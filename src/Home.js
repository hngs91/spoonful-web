import useFetch from "./useFetch"
import MedicineList from "./MedicineList"
import { useState } from 'react'

const Home = () => {
    const { data, isPending, error } = useFetch('http://localhost:8000/medicines')

    const [filteredData, setFilteredData] = useState([])

    const [value, setValue] = useState("")

    const onChange = (event) => {
        setValue(event.target.value)
        setFilteredData(data.filter(item => {
            const searchTerm = event.target.value.toLowerCase()
            const drugName = item.drugname.toLowerCase();
            return searchTerm && drugName.startsWith(searchTerm) && drugName !== searchTerm
        }))
    }

    return (
        <div className="home">
            <div className="search-container">
                <input type="text" value={value} onChange={onChange} placeholder="Enter medication here" />
            </div>

            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {data && <MedicineList medicines={filteredData} />}
        </div>
    );
}

export default Home;