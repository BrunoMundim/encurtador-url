import { Request, response, Response } from "express";
import shortId from "shortid";
import { config } from "../config/Constants"

export class URLController {
  public async shorten(req: Request, res: Response): Promise<void> {
    // Ver se a URL não existe
    // Criar o hash pra essa URL
    const { originURL } = req.body;
    const hash = shortId.generate();
    const shortURL = `${config.API_URL}/${hash}`;
    // Salvar a URL no banco
    // Retornar a URL que a gente salvou
    res.json({ originURL, hash, shortURL });
  }
}
