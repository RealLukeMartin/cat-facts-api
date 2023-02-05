import axios from 'axios';
import { Request, Response } from 'express';

import { config } from '../../config';

export async function catImageController(req: Request, res: Response) {
  const { data } = await axios.get(`${config.catImageApi.url}/search`, {
    headers: {
      'x-api-key': config.catImageApi.key,
    },
  });

  res.status(200);

  res.send(data[0]);

  return res;
}
