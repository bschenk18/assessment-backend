const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const { getCompliment } = require('./controller')

app.get("/api/compliment", getCompliment);

    const {getFortune, deleteFortune, createFortune, updateFortune} = require(`./controller.js`)

        app.get(`/api/fortune`, getFortune)
        app.delete(`/api/fortune/:id`, deleteFortune)
        app.post(`/api/fortune`, createFortune)
        app.put(`/api/fortune/:id`, updateFortune)

app.listen(4000, () => console.log("Server running on 4000"));

