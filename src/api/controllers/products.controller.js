const db = require("../../database/models");
const url = require("../config/url.public");

const productsAPIController = {
    list: (req, res) => {
        db.Products.findAll()
            .then((events) => {
                console.log(events.length);

                const productsMap = events.map((event) => ({
                    id: event.id,
                    title: event.title,
                    city: event.city,
                    place: event.place,
                    address: event.address,
                    type: event.type,
                    price: event.price,
                    availables: event.availables,
                    image: `${url.URL_PUBLIC_IMAGES_PRODUCTS}/${event.image}`,
                    detail: `${url.URL_API}/products/${event.id}`,
                }));

                return res.json({
                    count: events.length,
                    products: productsMap,
                });
            })
            .catch((err) => res.json(err));
    },
    detail: (req, res) => {
        const { id } = req.params;

        db.Products.findByPk(id)
            .then((event) => {
                res.json({
                    id: event.id,
                    title: event.title,
                    city: event.city,
                    place: event.place,
                    address: event.address,
                    type: event.type,
                    price: event.price,
                    availables: event.availables,
                    image: `${url.URL_PUBLIC_IMAGES_PRODUCTS}/${event.image}`,
                });
            })
            .catch((err) => res.json(err));
    },
};

module.exports = productsAPIController;
