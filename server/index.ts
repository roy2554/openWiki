require('../database/index');

import express, { Request, Response } from "express";
import next from "next";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

const passport = require('passport');
const cookieSession = require('cookie-session');

const config = require('./server-config');

const apiServer = require('./api');

(async () => {
  try {
    await app.prepare();
    const server = express();

    server.use(cookieSession({
        maxAge: 24 * 60 * 60 * 1000 * 30,
        keys: [config.session.cookieKey]
    }))
    
    server.use(passport.initialize())
    server.use(passport.session())

    server.use('/v2', apiServer);

    server.get("*", (req: Request, res: Response) => {
      return handle(req, res);
    });
    server.listen(port, (err?: any) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();