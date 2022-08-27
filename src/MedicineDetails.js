import { useParams } from "react-router-dom";
import useFetch from './useFetch';
import { Link } from "react-router-dom";

const MedicineDetails = () => {
    const { id } = useParams();
    const { data: medicine, error, isPending } = useFetch('http://localhost:8000/medicines/' + id)


    const onPronounce = () => {
        const filePath = "/" + medicine.drugname.toLowerCase() + ".mp3"
        const audio = new Audio(filePath)
        audio.play()
    }

    return (
        <div className="medicine-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {medicine && (
                <article>
                    <h1>{medicine.drugname}</h1>
                    <button onClick={() => onPronounce()}>Click here to pronounce</button>
                    <h4>What does it do?</h4>
                    <p>{medicine.what}</p>
                    <h4>How do you take it?</h4>
                    <p>{medicine.with}</p>
                    <h4>Call your Doctor if:</h4>
                    <p>{medicine.call}</p>
                    <div>
                        <Link to='/'>Search again</Link>
                    </div>
                </article>
            )}
        </div>
    );
}

export default MedicineDetails;