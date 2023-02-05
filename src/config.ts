import 'dotenv/config';

const {
  PORT = 4000,
  CAT_IMAGE_API_URL = 'https://api.thecatapi.com/v1/images',
  CAT_IMAGE_API_KEY = '',
  ALLOWED_ORIGIN = 'http://localhost',
} = process.env;

export const config = {
  allowedOrgin: ALLOWED_ORIGIN,
  port: PORT,
  catImageApi: {
    url: CAT_IMAGE_API_URL,
    key: CAT_IMAGE_API_KEY,
  },
};
