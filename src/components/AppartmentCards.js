import "../styles/layout/AppartmentCards.scss"
import AppartmentThumbnail from "../components/AppartmentThumbnail"
import { useAppartments } from '../hooks/useAppartments';




const AppartmentCards = () => {

    const appartments = useAppartments();
    return (
        <div className='appartmentCards'>
            {appartments.map((appart, index) => (
                <AppartmentThumbnail key={index} title={appart.title} imageUrl={appart.cover} id={appart.id} />
            ))}
        </div>
    );
}

export default AppartmentCards;