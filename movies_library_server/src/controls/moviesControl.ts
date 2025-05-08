import type { Request, Response } from "express";
import {
  deleteMovie,
  getCatalogo,
  getMoviebyId,
  patchMovie,
} from "../services/moviesService";
import { addMovie } from "../services/moviesService";

const handleGet = (req: Request, res: Response) => {
  try {
    res.send(getCatalogo());
  } catch (error) {
    res.status(500);
    if (error instanceof Error) {
      res.send(error.message);
    } else {
      res.send("Erro desconhecido");
    }
  }
};

const handleGetId = (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    if (id && String(id)) {
      const movie = getMoviebyId(id);
      if (!movie) {
        res.status(404);
        res.send("Filme não encontrado");
      } else {
        res.send(movie);
      }
    } else {
      res.status(422);
      res.send("ID_INVÁLIDO");
    }
  } catch (error) {
    res.status(500);
    if (error instanceof Error) {
      res.send(error.message);
    } else {
      res.send("Erro desconhecido");
    }
  }
};

const handleAdd = (req: Request, res: Response) => {
  try {
    const movieDto = req.body;
    if (req.body.nome) {
      addMovie(movieDto);
      res.status(201);
      res.send(`Filme adicionado com sucesso`);
    } else {
      res.status(422);
      res.send("O campo name é obrigatório");
    }
  } catch (error) {
    res.status(500);
    if (error instanceof Error) {
      res.send(`${error.message} | Filme não Adicionado`);
    } else {
      res.send("Erro Desconhecido, por favor entre em contato com o suporte");
    }
  }
};

const handlePatch = (req: Request, res: Response) => {
  try {
    const movieDto = req.body;
    if (req.body.id) {
      patchMovie(req.body.id, movieDto);
      res.status(200);
      res.send("Filme editado com sucesso");
    } else {
      res.status(422);
      res.send("ID_INVÁLIDO");
    }
  } catch (error) {
    res.status(500);
    if (error instanceof Error) {
      res.send(`${error.message}| Filme não Editado`);
    } else {
      res.send("Erro Desconhecido, por favor entre em contato com o suporte");
    }
  }
};
const handleDelete = (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    if (id && String(id)) {
      deleteMovie(id);
      res.status(200);
      res.send("Filme deletado com sucesso");
    } else {
      res.status(422);
      res.send("ID_INVÁLIDO");
    }
  } catch (error) {
    res.status(500);
    if (error instanceof Error) {
      res.send(`${error.message}| Filme não deletado`);
    } else {
      res.send("Erro Desconhecido, por favor entre em contato com o suporte");
    }
  }
};

export { handleAdd, handleGet, handleGetId, handlePatch, handleDelete };
