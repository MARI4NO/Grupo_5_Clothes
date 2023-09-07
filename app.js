//modulos
const path = require("path");
const express = require("express");
const fs = require("fs");
//requiriendo express en app
const app = express();
//accediendo a recursos estaticos
const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

//configurando ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));




//requieriendo del mainjs el modulo exportrado
const mainRouter=require("./routes/main")


//usando las rutas de main.js en app.js RUTAS
app.use("/", mainRouter)

// Routes
/* app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/index.html"));
});

app.get("/detail", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/productDeatil.html"));
});
app.get("/misTickets", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/myTickets.html"));
});
 */
// Start Server
app.listen(3003, () => {
    console.log("servidor corriendo en el puerto 3003");
});

//cambios provisorios a modificar


app.use(express.urlencoded({ extended: true }));

// Establecer el motor de vistas a EJS
app.set('view engine', 'ejs');

// Definir una ruta para renderizar la vista .ejs
app.get('/create', (req, res) => {
    res.render('create', { title: 'Crear Producto' });
});

app.get('/edit-duki-event', (req, res) => {
    const dukiEvent = {
        id: 1,
        name: "Concierto de Duki",
        description: "¡No te pierdas el emocionante concierto de Duki en tu ciudad!",
        date: "2023-09-15",
        venue: "Estadio XYZ",
        imageUrl: "https://example.com/duki-concert.jpg",
        ticketPrice: 50.00,
        colors: "Verde, Negro",
    };
    res.render('edit', { title: 'Editar Evento de Duki', event: dukiEvent });
});
app.post('/edit-duki-event/:eventId', (req, res) => {
    // Lógica para actualizar los valores del evento en la base de datos
    const eventId = req.params.eventId;
    const updatedEvent = req.body; // Aquí se encuentran los nuevos valores del evento desde el formulario
    
    // Realiza la lógica para actualizar los valores del evento en la base de datos
    // Puedes utilizar una base de datos, archivos JSON, u otro método según tu implementación
    
    // Envía una respuesta de éxito o error al cliente
    res.redirect('/edit-duki-event'); // Por ejemplo, redirige a la página de edición nuevamente
});



