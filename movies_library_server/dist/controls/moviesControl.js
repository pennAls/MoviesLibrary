"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleDelete = exports.handlePatch = exports.handleGetId = exports.handleGet = exports.handleAdd = void 0;
const moviesService_1 = require("../services/moviesService");
const moviesService_2 = require("../services/moviesService");
const handleGet = (req, res) => {
    try {
        res.send((0, moviesService_1.getCatalogo)());
    }
    catch (error) {
        res.status(500);
        if (error instanceof Error) {
            res.send(error.message);
        }
        else {
            res.send("Erro desconhecido");
        }
    }
};
exports.handleGet = handleGet;
const handleGetId = (req, res) => {
    try {
        const id = req.params.id;
        if (id && String(id)) {
            const movie = (0, moviesService_1.getMoviebyId)(id);
            if (!movie) {
                res.status(404);
                res.send("Filme não encontrado");
            }
            else {
                res.send(movie);
            }
        }
        else {
            res.status(422);
            res.send("ID_INVÁLIDO");
        }
    }
    catch (error) {
        res.status(500);
        if (error instanceof Error) {
            res.send(error.message);
        }
        else {
            res.send("Erro desconhecido");
        }
    }
};
exports.handleGetId = handleGetId;
const handleAdd = (req, res) => {
    try {
        const movieDto = req.body;
        if (req.body.nome) {
            (0, moviesService_2.addMovie)(movieDto);
            res.status(201);
            res.send(`Filme adicionado com sucesso`);
        }
        else {
            res.status(422);
            res.send("O campo name é obrigatório");
        }
    }
    catch (error) {
        res.status(500);
        if (error instanceof Error) {
            res.send(`${error.message} | Filme não Adicionado`);
        }
        else {
            res.send("Erro Desconhecido, por favor entre em contato com o suporte");
        }
    }
};
exports.handleAdd = handleAdd;
const handlePatch = (req, res) => {
    try {
        const movieDto = req.body;
        if (req.body.id) {
            (0, moviesService_1.patchMovie)(req.body.id, movieDto);
            res.status(200);
            res.send("Filme editado com sucesso");
        }
        else {
            res.status(422);
            res.send("ID_INVÁLIDO");
        }
    }
    catch (error) {
        res.status(500);
        if (error instanceof Error) {
            res.send(`${error.message}| Filme não Editado`);
        }
        else {
            res.send("Erro Desconhecido, por favor entre em contato com o suporte");
        }
    }
};
exports.handlePatch = handlePatch;
const handleDelete = (req, res) => {
    try {
        const id = req.params.id;
        if (id && String(id)) {
            (0, moviesService_1.deleteMovie)(id);
            res.status(200);
            res.send("Filme deletado com sucesso");
        }
        else {
            res.status(422);
            res.send("ID_INVÁLIDO");
        }
    }
    catch (error) {
        res.status(500);
        if (error instanceof Error) {
            res.send(`${error.message}| Filme não deletado`);
        }
        else {
            res.send("Erro Desconhecido, por favor entre em contato com o suporte");
        }
    }
};
exports.handleDelete = handleDelete;
