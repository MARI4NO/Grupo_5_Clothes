import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function EventDetailPage() {
    const { id } = useParams();

    const [loading, setLoading] = useState(true);
    const [event, setEvent] = useState();
    const [cant, setCant] = useState();

    const handleChange = (event) => {
        const { value } = event.target;
        setCant(value);
    };

    const addToCart = () => {
        if(cant >= 1 && cant <= event.availables) {
            alert("Agregando")
        } else {
            alert("Debe ingresar una cantidad")
        }
    };

    useEffect(() => {
        fetch("http://localhost:3003/api/products/" + id)
            .then((res) => res.json())
            .then((data) => {
                setEvent(data);
                setLoading(false);
                console.log(data);
            });
    }, [id]);

    return (
        <>
            {loading && <h6>Cargando...</h6>}
            <section className="flex flex-col gap-4 px-16">
                {!loading && event && (
                    <>
                        <picture className="w-full rounded-md ">
                            <img
                                src={event.image}
                                alt={event.title}
                                className="rounded-md w-full h-full object-cover"
                            />
                        </picture>
                        <article className="flex flex-col gap-4 px-0 md:px-28">
                            <h2 className="text-4xl font-bold uppercase">
                                {event.title}
                            </h2>
                            <div className="flex items-center gap-4">
                                <i className="fa-solid fa-location-dot text-5xl text-rosePomp"></i>
                                <div className="text-xl uppercase">
                                    <p>
                                        <span>Lugar: </span>
                                        {event.place}
                                    </p>
                                    <p>
                                        <span>Direccion: </span>
                                        {event.address}
                                    </p>
                                    <p>
                                        <span>Ciudad: </span>
                                        {event.city}
                                    </p>
                                </div>
                            </div>
                            <div className="mt-2">
                                <p className="uppercase text-xl font-light">
                                    Fecha:{" "}
                                    <span className="font-semibold">
                                        {event.date}
                                    </span>
                                </p>
                            </div>
                            <div className="w-full mt-4">
                                <table className="w-full table-auto">
                                    <thead>
                                        <tr className="bg-night text-snow uppercase">
                                            <th className="font-medium py-1">
                                                Tipo de ticket
                                            </th>
                                            <th className="font-medium py-1">
                                                Precio
                                            </th>
                                            <th className="font-medium py-1">
                                                Cantidad
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="tr-body">
                                            <td className="text-center py-2">
                                                {event.type}
                                            </td>
                                            <td className="py-2 text-center">
                                                $ {event.price}
                                            </td>
                                            <td className="py-2 flex justify-center">
                                                <input
                                                    type="number"
                                                    min="0"
                                                    name="cant"
                                                    className="border rounded-md outline-none px-2 py-1 focus:border-wisteria"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </article>

                        <div className="flex justify-center mt-8">
                            <button
                                className="uppercase bg-wisteria p-2 px-4 rounded-md border-2 border-neutral-900 hover:bg-palePurple text-lg font-semibold flex gap-2 items-center"
                                onClick={addToCart}
                            >
                                <span>Agregar al carrito</span>{" "}
                                <i className="fa-solid fa-cart-shopping"></i>
                            </button>
                        </div>
                    </>
                )}
            </section>
        </>
    );
}
