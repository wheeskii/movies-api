import { Router } from "express";
import type { Request, Response, NextFunction } from "express";

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.status(200).json({ message: "Hello World!" })
});

router.get("/movies", (req: Request, res: Response) => {
    res.status(200).json({ message: "These are the movies"})
})

export default router;