const path = require("path");
const multer = require("multer");

// *********** Configuración MULTER ******************
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const pathUpload = path.resolve(__dirname, "../../public/img/products");
        cb(null, pathUpload);
    },
    filename: function (req, file, cb) {
        console.log(file);
        const fileName = `${file.fieldname}-${Date.now()}${path.extname(
            file.originalname
        )}`;
        cb(null, fileName);
    },
});

const upload = multer({ storage });

module.exports = upload;
