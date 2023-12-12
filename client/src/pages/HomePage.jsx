import { useEffect, useState } from "react";
import EventCard from "../components/EventCard/EventCard";

export default function HomePage() {
    const [loading, setLoading] = useState(true);
    const [apiData, setApiData] = useState();

    useEffect(() => {
        fetch("http://localhost:3003/api/products")
            .then((res) => res.json())
            .then((data) => {
                setApiData(data);
                setLoading(false);
                console.log(data);
            });
    }, []);

    return (
        <>
            {loading && <h6>Cargando...</h6>}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {!loading &&
                apiData &&
                apiData.products.map((event) => (
                    <EventCard key={event.id} event={event} />
                ))}
            </section>
        </>
    );
}
