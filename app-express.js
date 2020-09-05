const express = require("express");
const app = express();

const port = 3000;

// Motor de plantilla
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.render("index", { titulo: "Mi titulo dinamico" })
});

app.get("/servicios", (req, res) => {
    res.render("servicios", { version: "5.2" })
});

app.use((req, res, next) => {
    res.status(404).render("404", {
        error: "404",
        descripcion: "No es una ruta valida"
    })
});


app.listen(port, () => {
    console.log(`Ejemplo de express http://localhost:${port}`);
});