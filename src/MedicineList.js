import { Link } from "react-router-dom"

const MedicineList = ({ medicines: data }) => {
    return (
        <div className="medicine-list">
            {data.map((item) => (
                <div className="medicine-preview" key={item.id}>
                    <Link to={`/medicines/${item.id}`}>
                        <h2>{item.drugname}</h2>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default MedicineList;