import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function EventCard({ event }) {
    return (
        <article className="w-full bg-white border-4 border-neutral-900 rounded-md flex flex-col gap-2 justify-between">
            <picture className="w-full rounded-md h-56 ">
                <img
                    src={event.image}
                    alt={event.title}
                    className="rounded-md w-full h-full object-cover"
                />
            </picture>

            <div className="w-full px-4">
                <h5 className="text-3xl font-bold">{event.title}</h5>
                <p className="mt-2 text-lg">{event.place}</p>
            </div>
            <div className="w-full px-4 mb-2 flex justify-end">
                <Link
                    to={`/products/${event.id}`}
                    className="bg-wisteria p-2 rounded-md border-2 border-neutral-900 hover:bg-palePurple text-sm font-semibold flex gap-2 items-center"
                >
                    COMPRAR
                    <i className="ticket-botoncomprar fas fa-ticket-alt"></i>
                </Link>
            </div>
        </article>
    );
}
