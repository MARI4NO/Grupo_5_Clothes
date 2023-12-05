const db = require("../../database/models");
const url = require("../config/url.public");
const {
    getNextPage,
    getOffset,
    getPreviousPage,
} = require("../utils/pagination");

const productsAPIController = {
    list: (req, res) => {
        const { page = 1, limit = 20 } = req.query;

        let options = {
            offset: getOffset(page, limit),
            limit: Number(limit),
        };

        db.Products.findAndCountAll(options)
            .then(({ count, rows: events }) => {
                // mapear todos los datos obtenidos
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

                const nextPage = getNextPage(page, limit, count);

                const next = nextPage
                    ? `${url.URL_API}/products?page=${nextPage}`
                    : nextPage;

                const previousPage = getPreviousPage(page);

                const previous = previousPage
                    ? `${url.URL_API}/products?page=${previousPage}`
                    : previousPage;

                return res.json({
                    count,
                    next,
                    previous,
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
