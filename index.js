import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import PelangganRoute from "./routes/PelangganRoute.js"
import PengaduanRoute from "./routes/PengaduanRoute.js";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json());
app.use(PelangganRoute);
app.use(PengaduanRoute);

app.listen(5000, ()=> console.log("Server Sedang berjalan di http://localhost:5000"));
