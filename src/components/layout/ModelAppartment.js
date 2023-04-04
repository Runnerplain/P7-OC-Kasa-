import React from 'react';
import "../../styles/layout/ModelAppartment.scss";

const ModelAppartment = () => {
    return (
        <section className='appartmentPage'>
            <div className="bannerAppartment"></div>
            <div className="appartmentHeader">
                <div className='appartment__title'>
                    <h1>Cozy loft on the Canal Saint-Martin</h1>
                    <h2>Paris, Île-de-France</h2>
                    <div className="appartment__title__tags">
                        <span>Cozy</span>
                        <span>Canal</span>
                        <span>Paris 10</span>
                    </div>
                </div>
                <div className="appartment__aside">
                    <div className="appartment__aside__owner">
                        <h3>
                            <span>Alexandre</span>
                            <span>Dumas</span>
                        </h3>
                        <div className="appartment__aside__owner__portrait"></div>
                    </div>
                    <div className="appartment__aside__stars">
                        <span className='on'>★</span>
                        <span className='on'>★</span>
                        <span className='on'>★</span>
                        <span className='off'>★</span>
                        <span className='off'>★</span>
                    </div>
                </div>
            </div>
            <div className="appartment__carousel">
                <div className="appartment__carousel__description">
                    <p className='title'>
                        <span>Description</span>
                        <i className="fa-solid fa-chevron-down"></i>
                    </p>
                    <p className='description'>Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied). </p>
                </div>
                <div className="appartment__carousel__description">
                    <p className='title'>
                        <span>Équipements</span>
                        <i className="fa-solid fa-chevron-down"></i>
                        </p>
                    <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nihil eveniet optio natus sequi eaque doloremque, consequuntur modi perferendis necessitatibus aliquam minus voluptates ullam cum repellat culpa aperiam? Distinctio blanditiis voluptatem fugiat magni reiciendis sit, amet accusantium cum, quasi repellat nemo quaerat adipisci corrupti veritatis autem esse praesentium dolorum doloremque?</p>
                </div>
            </div>

        </section>
    );
};

export default ModelAppartment;