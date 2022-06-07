import dotenv from 'dotenv';

dotenv.config({ path: `${__dirname}/../.env` });

export default {
  port: process.env.PORT || 3000,
  originUrl: process.env.ORIGIN_URL,
};
