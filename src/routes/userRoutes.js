const express = require("express");
const userRouter = express.Router();

// Configuración de multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "uploads"));
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    },
});
const upload = require("../config/multer.config");

// Ruta para manejar el registro de usuarios
app.post("/register", upload.single("image"), async (req, res) => {
    try {
        // Obtener datos del formulario
        const { firstName, lastName, email, password } = req.body;

        // Encriptar la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

        // Construir el objeto de usuario
        const user = {
            firstName,
            lastName,
            email,
            password: hashedPassword,
            image: req.file.filename, // Nombre del archivo subido
        };

        // Guardar datos en el archivo JSON
        const users = JSON.parse(fs.readFileSync("users.json"));
        users.push(user);
        fs.writeFileSync("users.json", JSON.stringify(users));

        // Redirigir a la página de inicio 
        res.redirect("/home");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error en el servidor");
    }
});

//importando controlador
const usersController = require("../controllers/userController");

userRouter.get("/login", usersController.loginView);
userRouter.post("/login", usersController.login);
userRouter.get("/register", usersController.registerView);
userRouter.post("/register", upload.single("image"), usersController.register);
userRouter.get("/misTickets", usersController.misTickets);
userRouter.get("/miCarrito", usersController.miCarrito);

module.exports = userRouter;
