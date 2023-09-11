// ************ REQUIRES ****************
const path = require("path");
const express = require("express");
const methodOverride =  require('method-override');
// ************ express() ************
const app = express();

// ************ VARIABLES ************
const PORT = 3003;

// ******** MIDDLEWARES ***********
// recursos estáticos
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));
// ************ Template Engine ************
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// ******* REQUIRES MODULOS *********************
const mainRouter = require("./routes/main");

//usando las rutas de main.js en app.js RUTAS
app.use("/", mainRouter);

// ************ Start Server **************
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});

//cambios provisorios a modificar

// Definir una ruta para renderizar la vista .ejs
app.get("/create", (req, res) => {
    res.render("create", { title: "Crear Producto" });
});

app.get("/edit-duki-event", (req, res) => {
    const dukiEvent = {
        id: 1,
        name: "Concierto de Duki",
        description:
            "¡No te pierdas el emocionante concierto de Duki en tu ciudad!",
        date: "2023-09-15",
        venue: "Estadio XYZ",
        imageUrl: "https://example.com/duki-concert.jpg",
        ticketPrice: 50.0,
        colors: "Verde, Negro",
    };
    res.render("edit", { title: "Editar Evento de Duki", event: dukiEvent });
});
app.post("/edit-duki-event/:eventId", (req, res) => {
    // Lógica para actualizar los valores del evento en la base de datos
    const eventId = req.params.eventId;
    const updatedEvent = req.body; // Aquí se encuentran los nuevos valores del evento desde el formulario

    // Realiza la lógica para actualizar los valores del evento en la base de datos
    // Puedes utilizar una base de datos, archivos JSON, u otro método según tu implementación

    // Envía una respuesta de éxito o error al cliente
    res.redirect("/edit-duki-event"); // Por ejemplo, redirige a la página de edición nuevamente
});
