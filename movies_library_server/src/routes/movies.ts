import { Router } from "express";
import type { Request, Response } from "express";
import {
  handleAdd,
  handleDelete,
  handleGet,
  handleGetId,
  handlePatch,
} from "../controls/moviesControl";

export const rotaMovies = Router();

rotaMovies.get("/", handleGet);

rotaMovies.get("/:id", handleGetId);

rotaMovies.post("/", handleAdd);

rotaMovies.patch("/", handlePatch);

rotaMovies.delete("/:id", handleDelete);
