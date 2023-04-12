import "../../../styles/layout/ModelAppartment.scss";
import DescriptionPan from '../MainElements/DescriptionPan';
import AppartmentBanner from './AppartmentBanner';
import AppartmentTitle from '../Appartment/AppartmentTitle';
import AppartmentAside from './AppartmentAside';
import { useAppartment } from '../../../hooks/useAppartment';


const ModelAppartment = () => {
    const flat = useAppartment();
    if (flat == null) return <div>...Loading</div>;


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
        </section>
    );
};

export default ModelAppartment;