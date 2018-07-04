const express = require("express");
const bodyParser = require("body-parser");
const messageCtrl = require("./controllers/messages_controller");

const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + "/../../public/build"));

app.post("/api/messages", messageCtrl.create);
app.get("/api/messages", messageCtrl.read);
app.put("/api/messages/:id", messageCtrl.update);
app.delete("/api/messages/:id", messageCtrl.delete);

const port = 3000;
app.listen(port, () => {
    console.log(`Server listening on port: ${port}.`);
});
