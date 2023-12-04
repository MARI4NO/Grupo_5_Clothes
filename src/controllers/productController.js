const fs = require("fs");
const path = require("path");
const convertToLocaleDate = require("../utils/convertToLocaleDate");

const db = require("../database/models");

const PATH_PUBLIC_IMAGES = path.join(__dirname, "../../public/img/products/");

const productController = {
    list: (req, res) => {
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
    detalleProducto: (req, res) => {
        const { id } = req.params;

        const { usuario } = req.session;
        const showLinks = req.session.usuario ? true : false;

        db.Products.findByPk(id)
            .then((event) => {
                res.render("products/productDetail", {
                    event,
                    convertDate: convertToLocaleDate,
                    showLinks,
                    idUsuario: usuario ? usuario.id : 0,
                });
            })
            .catch((err) => console.log(err));
    },
    create: (req, res) => {
        const { usuario } = req.session;
        const showLinks = req.session.usuario ? true : false;

        res.render("products/create", {
            showLinks,
            idUsuario: usuario ? usuario.id : 0,
        });
    },
    storeProduct: (req, res, next) => {
        const form = req.body;
        const fileUpload = req.file;

        // SI no se carga el archivo informo de un error
        if (!fileUpload) {
            const error = new Error("Por favor seleccione un archivo");
            error.httpStatusCode = 400;
            return next(error);
        }

        db.Products.create({
            title: form.title,
            image: fileUpload.filename,
            city: form.city,
            place: form.place,
            address: form.address,
            date: form.date,
            type: form.type,
            price: Number(form.price),
            availables: Number(form.availables),
        })
            .then((data) => {
                res.redirect("/products");
            })
            .catch((err) => console.log(err));
    },
    edit: (req, res) => {
        const { id } = req.params;

        db.Products.findByPk(id)
            .then((event) => {
                const { usuario } = req.session;
                const showLinks = req.session.usuario ? true : false;

                res.render("products/edit", {
                    event: event,
                    showLinks,
                    idUsuario: usuario ? usuario.id : 0,
                });
            })
            .catch((err) => console.log(err));
    },
    destroy: (req, res) => {
        const { id } = req.params;

        db.Products.findByPk(id)
            .then((event) => {
                const pathFile = `${PATH_PUBLIC_IMAGES}${event.image}`;

                // verifico si existe la imagen correspondiente al evento
                const existFile = fs.existsSync(pathFile);

                if (existFile) {
                    // Primero elimino la imagen correspondiente al evento
                    fs.unlinkSync(pathFile);

                    // elimino el evento de la base de datos
                    db.Products.destroy({ where: { id } })
                        .then((data) => {
                            res.redirect("/products");
                        })
                        .catch((err) => console.log(err));
                } else {
                    console.log("La imagen no existe");
                }
            })
            .catch((err) => console.log(err));
    },

    update: (req, res) => {
        const { id } = req.params;

        const event = req.body;
        const fileUpdated = req.file;

        const editedEvent = {
            title: event.title,
            city: event.city,
            place: event.place,
            address: event.address,
            date: event.date,
            type: event.type,
            price: Number(event.price),
            availables: Number(event.availables),
        };

        if (fileUpdated) {
            editedEvent.image = fileUpdated.filename;

            // elimino la imagen anterior
            db.Products.findByPk(id).then((event) => {
                if (event) {
                    const pathFile = `${PATH_PUBLIC_IMAGES}${user.event}`;

                    // verifico si existe la imagen correspondiente al evento
                    const existFile = fs.existsSync(pathFile);

                    if (existFile) {
                        // Primero elimino la imagen correspondiente al evento
                        fs.unlinkSync(pathFile);
                    }
                }
            });
        }

        db.Products.update(editedEvent, { where: { id } })
            .then((data) => {
                res.redirect("/products");
            })
            .catch((err) => console.log(err));
    },
};

module.exports = productController;
