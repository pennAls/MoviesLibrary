import express from "express";
import cors from "cors";
import { rotaMovies } from "./routes/movies";

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());
app.use("/movies", rotaMovies);

app.listen(port, () => {
  console.log(`Escutando a porta ${port}`);
});
