import { useDispatch, useSelector } from "react-redux";
import { openCloseDrawer } from "../../store/features/drawerSlice";
import { deleteEventToCart } from "../../store/features/cartSlice";
import { useEffect, useState } from "react";

export default function Drawer() {
    const { isOpen } = useSelector((state) => state.drawer);
    const { products } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const [totalPrice, setTotalPrice] = useState(0);

    const closeDrawer = () => {
        dispatch(openCloseDrawer(!isOpen));
    };

    const deleteEvent = (event) => {
        dispatch(deleteEventToCart(event));
    };

    useEffect(() => {
        let subTotal = 0;
        products.forEach((p) => {
            subTotal += p.event.price * p.cant;
        });
        setTotalPrice(subTotal);
    }, [products]);

    return (
        <>
            {isOpen && (
                <div className="fixed bg-snow h-screen w-1/3 z-50 right-0 top-0 flex flex-col gap-8 p-4 shadow-2xl">
                    <div className="w-full flex justify-start items-center">
                        <button
                            onClick={closeDrawer}
                            className="text-xl font-bold"
                        >
                            <i className="fa-solid fa-x"></i>
                        </button>

                        <h3 className="w-full text-center uppercase text-2xl underline">
                            Mi Carrito
                        </h3>
                    </div>

                    <div className="w-full flex flex-col gap-4">
                        {products.length == 0 ? (
                            <h6 className="text-center">No hay productos</h6>
                        ) : (
                            <>
                                {products.map((product) => (
                                    <article
                                        key={product.event.id}
                                        className="flex gap-4 h-32 items-center bg-white border rounded-md relative"
                                    >
                                        <picture className="w-1/3 h-full rounded-md">
                                            <img
                                                src={product.event.image}
                                                alt={product.event.title}
                                                className=" w-full h-full rounded-md object-cover"
                                            />
                                        </picture>
                                        <div className="flex flex-col gap-2">
                                            <h5 className="font-bold text-lg uppercase">
                                                {product.event.title}
                                            </h5>
                                            <p className="">
                                                {" "}
                                                Precio: ${" "}
                                                <span className="font-bold">
                                                    {product.event.price}
                                                </span>
                                            </p>
                                            <p>
                                                Cantidad:
                                                <span className="font-bold">
                                                    {" "}
                                                    {product.cant}
                                                </span>
                                            </p>
                                        </div>
                                        <button
                                            className="absolute bottom-2 right-2 p-2 text-sm  rounded-md hover:bg-snow"
                                            onClick={() =>
                                                deleteEvent(product.event)
                                            }
                                        >
                                            <i className="fa-solid fa-trash"></i>
                                        </button>
                                    </article>
                                ))}
                            </>
                        )}
                    </div>

                    {products.length > 0 && (
                        <>
                            <div>
                                <h6 className="uppercase text-xl text-end">
                                    Total:{" "}
                                    <span className="font-bold">
                                        $ {totalPrice}
                                    </span>
                                </h6>
                            </div>

                            <div className="flex justify-center mt-12">
                                <button className="bg-night px-8 py-2 uppercase text-snow rounded-md">
                                    Finalizar compra
                                </button>
                            </div>
                        </>
                    )}
                </div>
            )}
        </>
    );
}
