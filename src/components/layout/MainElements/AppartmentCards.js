import "../../../styles/layout/AppartmentCards.scss";
import AppartmentThumbnail from "./AppartmentThumbnail";
import { useAppartments } from '../../../hooks/useAppartments';



/**
 * @function
 * @returns {JSX.Element} JSX element for each apartment
 */
const AppartmentCards = () => {
    
    const appartments = useAppartments();
    return (
        <div className='appartmentCards'>
            {appartments.map((appart, index) => (
                <AppartmentThumbnail 
                key={index} // Unique Id for apartment thumbnail
                title={appart.title} 
                imageUrl={appart.cover} 
                id={appart.id} />
            ))}
        </div>
    );
}

export default AppartmentCards;