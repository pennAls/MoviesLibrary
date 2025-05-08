"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const movies_1 = require("./routes/movies");
const app = (0, express_1.default)();
const port = 8000;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/movies", movies_1.rotaMovies);
app.listen(port, () => {
    console.log(`Escutando a porta ${port}`);
});
