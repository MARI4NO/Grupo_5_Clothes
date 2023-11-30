const db = require("../../database/models");
const url = require("../config/url.public");
const {
    getNextPage,
    getOffset,
    getPreviousPage,
} = require("../utils/pagination");

const userAPIController = {
    list: (req, res)=>{
        const { page = 1, limit = 20 } = req.query;

        let options = {
            offset: getOffset(page, limit),
            limit: Number(limit),
        };
        db.Users.count(options)
            .then(({ count, rows: events }) => {

                const productsMap = events.map((event) => ({
                    id: event.id,
                    firstname: event.firstname,
                    lastname: event.lastname,
                    email: event.email,
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
    detail: (req, res)=>{
        const { id } = req.params;

        db.Users.findByPk(id)
            .then((event) => {
                res.json({
                    id: event.id,
                    firstname: event.firstname,
                    lastname: event.lastname,
                    email: event.email,
                    image: `${url.URL_PUBLIC_IMAGES_PRODUCTS}/${event.image}`,
                });
            })
            .catch((err) => res.json(err));
    }
};

module.exports = userAPIController;
