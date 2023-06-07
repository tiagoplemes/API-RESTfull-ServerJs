const express = require('express');
const app = express();
const data = require("./data.json");

app.use(express.json());
/*
    http://localhost:3000/clients
    https://jsonplaceholder.tyicode.com/users
    req = request
    res = response
*/

app.get("/clients", function (req, res) {
    res.json(data);
});

app.get("/clients/:id", function (req, res) {
    const { id } = req.params;
    const client = data.find(cli => cli.id == id);

    if (!client) return res.status(404).json();

    res.json(client);
});

app.post("/clients", function (req, res) {
    const { name, email } = req.body;

    //logica para salvar

    res.json({ name, email });
});

app.put("/clients/:id", function (req, res) {

    const { id } = req.params;
    const client = data.find(cli => cli.id == id);

    if (!client) return res.status(404).json();

    const { name } = req.body;
    client.name = name;

    res.json(client);
});
app.delete("/clients/:id", function (req, res) {
    const { id } = req.params;
    const clientsFiltred = data.filter(client => client.id != id);

    res.json(clientsFiltred);
});

app.listen(3000, () => {
    console.log("Server is running");
});

