import React from 'react';
function PlaceCard({name, description}) {
    return (
        <div className="place-card">
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
    );
}
export default PlaceCard;