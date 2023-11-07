const db = require("../database/models");

const mainController = {
    home: (req, res) => {
        const { usuario } = req.session;
        const showLinks = req.session.usuario ? true : false;

        db.Products.findAll()
            .then((events) => {
                res.render("products/index", {
                    products: events,
                    showLinks,
                    idUsuario: usuario ? usuario.id : 0,
                });
            })
            .catch((err) => console.log(err));
    },
};

module.exports = mainController;
