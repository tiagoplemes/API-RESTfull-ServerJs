const express = require("express");
const app = express();
const data = require("./data.json");

app.use(express.json());

/* https://jsonplaceholder.typicode.com/users */

app.get("/clients", function(request, response) {
    response.json(data);
});

app.get("/clients/:id", function(request, response) {
    const { id } = request.params
    const client = data.find(cli => cli.id == id);

    if (!client) {
        return response.status(204).json()
    }

    response.json(client);
});

app.post("/clients", function(request, response) {
    const { name, email} = request.body;

    //salvar

    response.json({name, email});
});

app.put("/clients/:id", function(request, response) {
    const { id } = request.params
    const client = data.find(cli => cli.id == id);

    if (!client) {
        return response.status(204).json()
    }

    const { name } = request.body;

    client.name = name; 
    //Valor não altera o arquivo data.js pois nao escrevi nele

    response.json(client);
});

app.delete("/clients/:id", function(request, response) {
    const { id } = request.params
    const clientFiltered = data.filter(cli => cli.id != id);

    response.json(clientFiltered);
});

app.listen(5555, () => {
    console.log("Server is running");
});