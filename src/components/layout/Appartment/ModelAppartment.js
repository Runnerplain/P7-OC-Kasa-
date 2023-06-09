import "../../../styles/layout/ModelAppartment.scss";
import DescriptionPan from '../MainElements/DescriptionPan';
import AppartmentBanner from './AppartmentBanner';
import AppartmentTitle from '../Appartment/AppartmentTitle';
import AppartmentAside from './AppartmentAside';
import { useAppartment } from '../../../hooks/useAppartment';
import ErrorPage from "../../../pages/ErrorPage";
import Footer from "../MainElements/Footer";


/**
 * @function
 * @returns {JSX.Element} Jsx Element with a standars model of apartment or a message "...loading" if the page its loading, so we can prevent crash...
 */
const ModelAppartment = (param) => {

    
    /**
     * @constant {function}
     */
    const flat = useAppartment(param.flatId);
    
    // Condition to display loading if the page is loading
   
    if (!flat) {
        return <ErrorPage />
    }
    return (
        <section className='appartmentPage'>
            <AppartmentBanner pictures={flat.pictures} />
            <div className="appartmentHeader">
                <AppartmentTitle flat={flat} />
                <AppartmentAside flat={flat} />
            </div>
            <div className="appartment__pan">
                <DescriptionPan title="Description" content={flat.description} />
                <DescriptionPan title="Equipements" content={flat.equipments.map((eq, index) => <li key={index}>{eq}</li>)} />
            </div>
            <Footer />     
        </section>
    )
}


export default ModelAppartment;