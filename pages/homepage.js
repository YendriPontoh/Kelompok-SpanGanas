import React from 'react';
import PlaceCard from '../components/PlaceCard';
function HomePage() {
    const places = [
        {name: "Bali", description: "Pantai dan Budaya yang luar biasa keindahannya."},
        {name: "Yogyakarta", description: "Sejarah dan Kuliner yang kaya."}
    ];
    return (
        <div>
            <h2>Tempat Wisata Populer</h2>
            {places.map((place, index) => (
                <PlaceCard key={index} name={place.name} description={place.description} />
            ))}
        </div>
    );
}
export default HomePage;