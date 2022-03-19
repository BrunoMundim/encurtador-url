import { Request, response, Response } from "express";
import shortId from "shortid";
import { config } from "../config/Constants";

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

  public async redirect(req: Request, res: Response): Promise<void> {
    // Pegar o hash da URL
    const { hash } = req.params;

    // Encontrar a URL original pelo hash
    const url = {
      originURL:
        "https://cloud.mongodb.com/v2/622d28516432427a9fa00d73#clusters/connect?clusterId=DIO-Encurtador-URL",
      hash: "mPFscSbx7",
      shortURL: "http://localhost:5000/mPFscSbx7",
    };
    // Redirecionar para a URL original a partir do que encontramos no banco de dados
    res.redirect(url.originURL);
  }
}
